import styled from '@emotion/styled'
import Layout from '../components/layout/Layout'
import { useRouter } from 'next/router'

const Heading = styled.h1`
  color: red;
`;

export default function Search() {
  const router = useRouter();
  const {query: {q} } = router;
  console.log(q);
  return (

    <div>
      <Layout>
        <Heading>Search</Heading>
      </Layout>

    </div>
  )
}
