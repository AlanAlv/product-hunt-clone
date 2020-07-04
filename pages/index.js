import React, { useEffect, useState, useContext } from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { FirebaseContext } from '../firebase';

const Heading = styled.h1`
  color: red;
`;

export default function Home() {

  const [products, setProducts] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getProducts = () => {
      firebase.db.collection('products').orderBy('created', 'desc').onSnapshot(handleSnapshot);
    }

    getProducts();
  }, [])

  function handleSnapshot(snapshot) {
    const products = snapshot.docs.map(doc => {
      return{
        id: doc.id,
        ...doc.data()
      }
    });

    console.log(products)
  }

  return (

    <div>
      <Layout>
        <Heading>Home</Heading>
      </Layout>

    </div>
  )
}
