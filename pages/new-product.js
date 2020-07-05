import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import FileUploader from 'react-firebase-file-uploader';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';
import useValidation from '../hooks/useValidation';
import firebase from '../firebase';
import validateCreateProduct from '../validation/validateCreateProduct';
import { FirebaseContext } from '../firebase';

const Heading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const INITIAL_STATE = {
  name: '',
  company: '',
  image: '',
  url: '',
  description: ''
}

export default function NewProduct() {

  // Images State
  const [imageName, setImageName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const [ error, setError ] = useState(false);

  const {values, errors, handleSubmit, handleChange, handleBlur} = useValidation(INITIAL_STATE, validateCreateProduct, createProduct);
  
  const { name, company, image, url, description } = values;

  // Routing hook
  const router = useRouter();

  // Firebase context
  const { user, firebase } = useContext(FirebaseContext);

  async function createProduct () {

    // Unauthenticated user redirect
    if(!user){
      return router.push('/login');
    }

    // Create new product object 
    const product = {
      name, 
      company, 
      url, 
      imageUrl,
      description, 
      votes: 0, 
      comments: [], 
      created: Date.now(),
      creator: {
        id: user.uid,
        name: user.displayName
      }
    }

    // Insert to db
    firebase.db.collection('products').add(product);

    return router.push('/');
  }

  const handleUploadStart = () => { 
    setProgress(0);
    setUploading(true);
  };

  const handleProgress = progress => setProgress({ progress });

  const handleUploadError = error => {
    setUploading(error);
    console.error(error);
  };

  const handleUploadSuccess = imageName => {
    setProgress(100);
    setUploading(false);
    setImageName(imageName)
    firebase
      .storage
      .ref("products")
      .child(imageName)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        setImageUrl(url);
      });
  };
  
  return (

    <>
      <Layout>
        <Heading>New Product</Heading>
      </Layout>

      <Form 
        onSubmit={handleSubmit}
        noValidate
      >
        <fieldset>
          <legend>General Info</legend>
          <Field>
            <label htmlFor="name">
              Name
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              id="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>

          {errors.name && <Error>{errors.name}</Error>}

          <Field>
            <label htmlFor="company">
              Company
            </label>
            <input 
              type="text" 
              name="company"
              placeholder="Company" 
              value={company}
              id="company"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>

          {errors.company && <Error>{errors.company}</Error>}

          <Field>
            <label htmlFor="image">
              Image
            </label>
            <FileUploader 
              accept="image/*"
              id="image"
              name="image"
              randomizeFilename
              storageRef={firebase.storage.ref("products")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
            />
          </Field>

          <Field>
            <label htmlFor="url">
              Url
            </label>
            <input 
              type="url" 
              name="url"
              placeholder="Product URL"
              id="url"
              value={url}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>

          {errors.url && <Error>{errors.url}</Error>}

        </fieldset>

        <fieldset>
          <legend>About product</legend>

          <Field>
            <label htmlFor="description">
              Description
            </label>
            <textarea 
              type="description" 
              name="description"
              id="description"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>

          {errors.description && <Error>{errors.description}</Error>}
        </fieldset>




        {error && <Error>{error}</Error>}
        <InputSubmit 
          type="submit" 
          value="Create Product"
        />
      </Form>
    </>
  )
}
