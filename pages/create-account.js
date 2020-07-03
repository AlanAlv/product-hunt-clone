import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit, Error } from '../components/ui/Form';
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


  const {values, errors, handleSubmit, handleChange, handleBlur} = useValidation(INITIAL_STATE, validateCreateAccount, createAccount);
  
  const { name, email, password } = values;

  function createAccount () {
    console.log('Creating acount...');
  }
  
  return (

    <>
      <Layout>
        <Heading>Create Account</Heading>
      </Layout>

      <Form 
        onSubmit={handleSubmit}
        noValidate
      >
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

        <InputSubmit 
          type="submit" 
          value="Sign Up"
        />
      </Form>
    </>
  )
}
