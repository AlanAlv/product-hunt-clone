import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Product = ({props}) => {
    const router = useRouter();
    const { query: { id } } = router;


    useEffect(() => {
        if(id){
            console.log('ID: ', id);
        }
    }, [id])
    return ( 
        <h1>Product { id }</h1>
     );
}
 
export default Product;