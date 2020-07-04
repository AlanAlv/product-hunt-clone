import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Image = styled.img`
    width: 200px;
`;

const ProductDetails = ({product}) => {

    const { id, comments, created, description, company, name, url, imageUrl, votes} = product
    console.log(product);
    return ( 
        <li>
            <div>
                <div>
                    <Image src={imageUrl} />
                </div>

                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>

                    <div>
                        <img src="/static/img/comment.png" alt=""/>
                        <p>{comments.length} Comments</p>
                    </div>

                    <p>Published on: {formatDistanceToNow(new Date(created))}</p>
                </div>

            </div>

            <div>
                <div> &#9650; </div>
                <p>{votes}</p>
            </div>
        </li>
     );
}
 
export default ProductDetails;