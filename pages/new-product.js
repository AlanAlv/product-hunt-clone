import React, {useState} from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';
import useValidation from '../hooks/useValidation';
import firebase from '../firebase';
import validateCreateProduct from '../validation/validateCreateProduct';

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

  const [ error, setError ] = useState(false);

  const {values, errors, handleSubmit, handleChange, handleBlur} = useValidation(INITIAL_STATE, validateCreateProduct, createAccount);
  
  const { name, company, image, url, description } = values;

  async function createAccount () {

  }
  
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
              id="company"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>

          {errors.company && <Error>{errors.company}</Error>}
{/* 
          <Field>
            <label htmlFor="image">
              Image
            </label>
            <input 
              type="file" 
              name="image"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>

          {errors.image && <Error>{errors.image}</Error>} */}

          <Field>
            <label htmlFor="url">
              Url
            </label>
            <input 
              type="url" 
              name="url"
              placeholder="Product URL"
              id="url"
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
