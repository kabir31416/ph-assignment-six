import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';

const Cart = ({addedProduct ,setAddedProduct, setNavCart}) => {


        const handleRemove = (product) => {
            const filteredProduct = addedProduct.filter(aproduct => aproduct.id !== product.id);
            setAddedProduct(filteredProduct);
            setNavCart(filteredProduct.length);
            toast(`${product.name} removed from cart`);
        };

    return (
        <div className='border border-gray-200 rounded-2xl p-5'>
            <div>
                <h1>Your Cart</h1>

                {
                    addedProduct.length === 0 ? 
                    (<div className='flex flex-col justify-center items-center gap-4 p-20'>

                        <ShoppingCart className='h-20 w-20 text-gray-300'></ShoppingCart>
                        <h1>
                           Your cart is empty
                        </h1>
                    </div>) 

                    : (<div>
                                {
                                    addedProduct.map((product) =>{
                                        return <div key={product.id} className='flex justify-between items-center p-3 bg-gray-50 border-gray-100 rounded-xl m-2'>
                                        <div className='flex gap-3'>
                                            <img
                                                    src="https://bplt20.com.bd/images/sliders/slider-2025.jpeg"
                                                    className="w-24 h-15 rounded-xl"
                                                    alt="player"
                                                    />
                                            
                                            <div>
                                                <h1 className='text-2xl font-bold'>{product.name}</h1>
                                                <h3>$ {product.price}</h3>
                                            </div>
                                        </div>

                                        <button onClick={() => handleRemove(product)} className='btn text-red-700 '  >Remove</button>
                                        </div>
                                    })
                                }
                        </div>)

                }


            </div>
        </div>
    );
};

export default Cart;