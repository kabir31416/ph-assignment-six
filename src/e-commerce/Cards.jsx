import React from 'react';
import { toast } from 'react-toastify';

const Cards = ({product, setAddedProduct, addedProduct, setCart}) => {

    const handleButton = () => {

        setCart(addedProduct.length)

        toast(`${product.name} added to cart`)
        setAddedProduct([...addedProduct, product])
    }


    return (
        <div className=" w-full h-auto rounded-3xl border border-gray-100 bg-white p-6 shadow-sm relative">
            
            <div className="absolute top-6 right-6">
                <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                {product.tag}
                </span>
            </div>

            <div className="mb-6">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                <span className="text-2xl">📝</span> 
                </div>
            </div>

            
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {product.description}
            </p>

            
            <div className="flex items-baseline mb-8">
                <span className="text-3xl font-bold text-slate-900">$29</span>
                <span className="text-gray-400 ml-1 text-sm">/{product.period}</span>
            </div>

            <ul className="space-y-4 mb-8">
                {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button onClick={handleButton} className="w-full bg-[#8b2cf5] hover:bg-[#7a22e0] text-white font-bold py-4 rounded-2xl transition-colors duration-200">
                Buy Now
            </button>
        </div>
    );
};

export default Cards;