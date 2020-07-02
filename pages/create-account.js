import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import { Form, Field, InputSubmit } from '../components/ui/Form';

const Heading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

export default function CreateAccount() {
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
