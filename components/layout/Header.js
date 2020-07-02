import Search from '../ui/Search';
import Nav from './Nav'
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Button from '../ui/Button';

const ContainerHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`
const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slap', serif;
    margin-right: 2rem;
`;

const Header = () => {

    const user = true;

    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gray3);
                padding: 1rem 0;
            `}
        >
            <ContainerHeader>
                <div>
                    <Link href="/">                    
                        <Logo>Project</Logo>
                    </Link>

                    <Search />

                    <Nav />
                </div>

                    <div
                        css={css`
                            display:flex;
                            align-items: center;
                        `}
                    >
                        {user ? (
                            <>
                                <p
                                    css={css`
                                        margin-right: 2rem;
                                    `}
                                
                                >
                                    Hello Alan
                                </p>

                                <Button 
                                    bgColor={true}
                                >
                                    Log Out
                                </Button>
                                
                               
                            </>
                        ) : (
                            <>
                                <Link href="/">
                                    <Button
                                        bgColor={true}
                                    >
                                        Sign In
                                    </Button>
                                </Link>

                                <Link href="/">
                                    <Button>Sign Up</Button>
                                </Link>
                            </>
                        )}

                    </div>

            </ContainerHeader>
        </header>
     );
}
 
export default Header;
