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

        const handleProceed = () => {
            setAddedProduct([])
            setNavCart(0)
        }

        const totalPrice = addedProduct.reduce((total, product) => total + product.price, 0);

    return (
        <div className='border border-gray-200 rounded-2xl p-5'>
            <div>
                <h1 className='py-2 font-bold text-2xl'>Your Cart</h1>

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
                                        return <div key={product.id} className='flex justify-between items-center p-3 bg-gray-100 border-gray-200 rounded-xl mb-2'>
                                        <div className='flex gap-3'>
                                            <div className=" rounded-full bg-white p-4">
                                                <img
                                                    src={product.icon}
                                                    alt="player"
                                                    className='h-6 w-6'
                                                    />
                                            </div>
                                            
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

                <div className='flex justify-between'>
                    <p className='py-6'>Total:</p>
                    <h1 className='font-bold text-2xl'>${totalPrice.toFixed(2)}</h1>
                </div>

                <button onClick={handleProceed} className='rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-3 hover:cursor-pointer' >Proceed to Checkout</button>

            </div>
        </div>
    );
};

export default Cart;