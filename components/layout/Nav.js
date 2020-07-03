import React, { useContext } from 'react';
import Link from 'next/link'
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';

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

    const { user } = useContext(FirebaseContext);

    return (  
        <Navbar>
            <Link href="/"><a title="Home">Home</a></Link>
            <Link href="/populars"><a title="Popular">Popular</a></Link>
            {user && (
                <Link href="/new-product"><a title="New Product">New Product</a></Link>
            )}

        </Navbar>
    );
}
 
export default Nav;