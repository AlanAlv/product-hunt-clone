import Link from 'next/link'
import styled from '@emotion/styled';

const Navbar = styled.nav`
    padding-left: 2rem;
    
    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gray2);
        font-family: 'PT Sans', sans-serif;
    }    
`



const Nav = () => {
    return (  
        <Navbar>
            <Link href="/"><a title="Home">Home</a></Link>
            <Link href="/"><a title="Popular">Popular</a></Link>
            <Link href="/"><a title="New Product">New Product</a></Link>

        </Navbar>
    );
}
 
export default Nav;