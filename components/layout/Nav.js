import Link from 'next/link'

const Nav = () => {
    return (  
        <nav>
            <Link href="/"><a title="Home">Home</a></Link>
            <Link href="/"><a title="Popular">Popular</a></Link>
            <Link href="/"><a title="New Product">New Product</a></Link>

        </nav>
    );
}
 
export default Nav;