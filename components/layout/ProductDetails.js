
const ProductDetails = ({product}) => {

    const { id, comments, created, description, company, name, url, imageUrl, votes} = product
    console.log(product);
    return ( 
        <li>
            <div>
                <div>

                </div>
                <div>
                    <h1>{name}</h1>
                </div>
            </div>
            <div>

            </div>
        </li>
     );
}
 
export default ProductDetails;