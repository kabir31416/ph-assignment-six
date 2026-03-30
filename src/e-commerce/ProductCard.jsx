
import Cards from './Cards';

const ProductCard = ({productData, addedProduct, setAddedProduct, setCart, setNavCart}) => {

    return (

        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center"> 
            {
                productData.map( product => {
                    return (
                        <Cards key={product.id} product={product} addedProduct={addedProduct} setAddedProduct={setAddedProduct} setCart={setCart} setNavCart={setNavCart}></Cards>
                    )
                    })
            }
        </div>
        </>
            
    );
};

export default ProductCard;