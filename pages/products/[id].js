import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext} from '../../firebase';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/Error404';

const Product = ({props}) => {

    // Product state
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);

    const router = useRouter();
    const { query: { id } } = router;

    // Firebase context 
    const { firebase } = useContext(FirebaseContext);

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
    }, [id])

    return ( 
        <Layout>
            <>
            { error && <Error404 /> }
            </>
        </Layout>
     );
}
 
export default Product;