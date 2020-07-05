import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext} from '../../firebase';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/Error404';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Field, InputSubmit } from '../../components/ui/Form';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Button from '../../components/ui/Button';


const ProductContainer = styled.div`
    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const Product = ({props}) => {

    // Product state
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [comment, setComment] = useState({})

    const router = useRouter();
    const { query: { id } } = router;

    // Firebase context 
    const { firebase, user } = useContext(FirebaseContext);

    useEffect(() => {
        if(id){
            const getProduct = async () => {
                const productQuery = await firebase.db.collection('products').doc(id);
                const product = await productQuery.get();
                if(product.exists){
                    setProduct(product.data());
                } else {
                    setError(true);
                }
            }
            getProduct();
        }
    }, [id, product])

    if (Object.keys(product).length === 0) return 'Loading...';
    
    const {  comments, created, description, company, name, url, 
        imageUrl, votes, creator, hasVoted} = product;

    // Voting
        const voteProduct = () => {
            if(!user){
                return router.push('/login')
            }

            // Sum new vote
            const newTotal = votes + 1;

            // Check if user already has voted
            if(hasVoted.includes(user.uid)) return;

            // Save ids of users who already voted
            const newHasVoted = [...hasVoted, user.uid];

            // Update db
            firebase.db.collection('products').doc(id).update({
                votes: newTotal,
                hasVoted: newHasVoted
            });
            
            // Update state
            setProduct({
                ...product,
                votes: newTotal
            })

        }

    // Comments
    const commentChange = e => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    const addComment = e => {
        e.preventDefault();

        if(!user){
            return router.push('/login')
        }

        // Add user info to comment
        comment.userId = user.uid;
        comment.username = user.displayName;

        // Add comments to array
        const newComments = [ ...comments, comment ];

        // Update db
        firebase.db.collection('products').doc(id).update({
            comments: newComments
        })

        // Update state
        setProduct({
            ...product,
            comments: newComments
        })


    }
    return ( 
        <Layout>
            <>
                { error && <Error404 /> }

                <div className="container">
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 5rem;
                        `}
                    > { name }</h1>

                    <ProductContainer>
                        <div>
                            <p>Published on: {formatDistanceToNow(new Date(created))}</p>
                            <p>By: {creator.name} from {company} </p>

                            <img src={imageUrl}/>
                            <p>{description}</p>

                            { user && (
                                <>
                                    <h2>Add a comment</h2>
                                    <form
                                        onSubmit={addComment}
                                    >
                                        <Field>
                                            <input
                                                type="text"
                                                name="message"
                                                onChange={commentChange}
                                            />
                                        </Field>
                                        <InputSubmit
                                            type="submit"
                                            value="Add a comment"
                                        />
                                    </form>

                                </>
                            )
                            
                            
                            }
                            <h2
                                css={css`
                                    margin: 2rem 0;
                                `}
                            >
                                Comments
                            </h2>


                            { comments.length === 0 
                                ? 
                                    'No comments, write one!' 
                                : (
                                    <ul>
                                    {comments.map((comment, i) => (
                                        <li
                                            key={`${comment.userId}-${i}`}
                                            css={css`
                                                border: 1px solid #E1E1E1;
                                                padding: 2rem;
                                            `}
                                        >
                                            <p>{comment.message}</p>
                                            <p>
                                                Comment by: {' '} 
                                                <span
                                                    css={css`
                                                        font-weight: bold;
                                                    `}
                                                >
                                                    {comment.username}
                                                </span>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                )
                            }
                           
                        </div>

                        <aside>
                            <Button
                                target="_blank"
                                bgColor="true"
                                href={url}
                            >
                                Go to URL
                            </Button>
                            

                            <div
                                css={css`
                                    margin-top: 5rem;
                                `}
                            >

                            </div>
                            <p
                                css={css`
                                    text-align: center;
                                `}
                            >
                                {votes} Votes</p>
                            { user && (
                                
                                <Button
                                    onClick={voteProduct}
                                >
                                    Vote
                                </Button>
                            )}
                        </aside>
                    </ProductContainer>
                </div>
            </>
        </Layout>
     );
}
 
export default Product;