import React from 'react';

const Cart = ({addedProduct ,setAddedProduct}) => {


    const handleRemove= (product) => {
        const filterdProduct = addedProduct.filter( aproduct => aproduct.id !== product.id)
        setAddedProduct(filterdProduct);
    }


    return (
        <div>
            {
                addedProduct.map((product) =>{
                    return <div key={product.id} className='flex justify-between items-center p-4 border border-gray-400 rounded-xl m-2'>
                    <div className='flex gap-3'>
                        <img
                                src="https://bplt20.com.bd/images/sliders/slider-2025.jpeg"
                                className="w-24 h-15 rounded-xl"
                                alt="player"
                                />
                        
                        <div>
                            <h1 className='text-2xl font-bold'>{product.name}</h1>
                            <h3>{product.price}</h3>
                        </div>
                    </div>

                    <button onClick={() => handleRemove(product)} className='btn' color='red' >Remove</button>
                </div>
                })



            }
        </div>
    );
};

export default Cart;