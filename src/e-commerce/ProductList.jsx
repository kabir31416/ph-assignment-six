import React, { use, useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';

const ProductList = ({dataPromise, setCart}) => {

    const productData = use(dataPromise);

    const [active, setActive] = useState("Active");

    const [addedProduct, setAddedProduct] = useState([]);

    return (
        <div className='flex flex-col gap-10 px-50 py-40'>

            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='font-extrabold text-5xl'>Premium Digital Tools</h1>
                <p className='text-center'>Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
                <div className='flex border rounded-full gap-3 border-gray-300'>

                    <button onClick={() => setActive("Active")} className={`tab tab-active px-5 py-2 ${active === "Active" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" :"text-black"} rounded-full`}>Products</button>
                    
                    <button onClick={() => setActive("Selected")} className={`tab px-5 py-2 ${active === "Selected" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" :"text-black"} rounded-full`}>Cart({addedProduct.length})</button>

                </div>
            </div>


            <div >
            {
                active === "Active" ? <ProductCard key={productData.id} productData={productData} addedProduct={addedProduct} setAddedProduct={setAddedProduct} setCart={setCart}></ProductCard> : <Cart addedProduct={addedProduct} setAddedProduct={setAddedProduct}></Cart>
            }
            </div>



        </div>
    );
};

export default ProductList;