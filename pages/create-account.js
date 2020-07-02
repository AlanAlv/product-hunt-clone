import styled from '@emotion/styled'
import Layout from '../components/layout/Layout'

const Heading = styled.h1`
  color: red;
`;

export default function CreateAccount() {
  return (

    <>
      <Layout>
        <Heading>Create Account</Heading>
      </Layout>

      <form action="">
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            id="name"
          />
        </div>

        <div>
          <label htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            id="email"
          />
        </div>

        <div>
          <label htmlFor="password">
            Password
          </label>
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            id="password"
          />
        </div>

        <input 
          type="submit" 
          value="Sign Up"
        />
      </form>
    </>
  )
}
