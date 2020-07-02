import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit } from '../components/ui/Form';
import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';

const Heading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

export default function CreateAccount() {


  const {values, errors, submitForm, handleSubmit, handleChange} = useValidation(INITIAL_STATE, validateCreateAccount, createAccount);
  
  function createAccount () {
    console.log('Creating acount...');
  }
  
  return (

    <>
      <Layout>
        <Heading>Create Account</Heading>
      </Layout>

      <Form action="">
        <Field>
          <label htmlFor="name">
            Name
          </label>
          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            id="name"
          />
        </Field>

        <Field>
          <label htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            id="email"
          />
        </Field>

        <Field>
          <label htmlFor="password">
            Password
          </label>
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            id="password"
          />
        </Field>

        <InputSubmit 
          type="submit" 
          value="Sign Up"
        />
      </Form>
    </>
  )
}
