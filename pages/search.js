import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import ProductDetails from '../components/layout/ProductDetails';
import useProducts from '../hooks/useProducts';


const Heading = styled.h1`
  color: red;
`;



export default function Search() {


  const router = useRouter();
  const {query: {q} } = router;

  const { products } = useProducts('created');
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = q.toLowerCase();
    const filter = products.filter(product => {
      return(
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.company.toLowerCase().includes(search)
      );
    })

    setResult(filter);
  }, [q, products]);

  return (


    <div>
      <Layout>
        <div className="list-products">
          <div className="container">
            <ul className="bg-white">
              {result.map(product => (
                <ProductDetails
                  key={product.id}
                  product={product}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>

    </div>
  )
}
