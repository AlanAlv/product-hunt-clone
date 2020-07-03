import React, {useState} from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';
import useValidation from '../hooks/useValidation';
import validateLogin from '../validation/validateLogin';
import firebase from '../firebase';

const Heading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const INITIAL_STATE = {
  email: '',
  password: ''
}

export default function Login(){

  const [ error, setError ] = useState(false);

  const {values, errors, handleSubmit, handleChange, handleBlur} = useValidation(INITIAL_STATE, validateLogin, logIn);
  
  const { email, password } = values;

  async function logIn () {
    console.log('Loging in')
  }
  
  return (

    <>
      <Layout>
        <Heading>Login</Heading>
      </Layout>

      <Form 
        onSubmit={handleSubmit}
        noValidate
      >
        <Field>
          <label htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>
        
        {errors.email && <Error>{errors.email}</Error>}

        <Field>
          <label htmlFor="password">
            Password
          </label>
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            id="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>

        {errors.password && <Error>{errors.password}</Error>}
        {error && <Error>{error}</Error>}
        <InputSubmit 
          type="submit" 
          value="Sign In"
        />
      </Form>
    </>
  )
}
