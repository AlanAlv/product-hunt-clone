import Link from 'next/link';

import Search from '../ui/Search'
import Nav from './Nav'


const Header = () => {
    return ( 
        <header>
            <div>
                <div>
                    <p>
                        Project
                    </p>

                    <Search />

                    <Nav />

                    <div>
                        <p>Hello Alan</p>

                        <button type="button">Log Out</button>
                        <Link href="/">Sign In</Link>
                        <Link href="/">Sign Up</Link>

                    </div>

                    
                </div>
            </div>
        </header>
     );
}
 
export default Header;
