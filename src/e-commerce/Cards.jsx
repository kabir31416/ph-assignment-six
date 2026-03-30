import { Check, CircleCheckBig } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Cards = ({product, setAddedProduct, addedProduct, setCart, setNavCart}) => {

    const [isClicked, setIsClicked] = useState(false)

    const handleButton = () => {
    
        const updatedProducts = [...addedProduct, product];

        setIsClicked(true);
        setAddedProduct(updatedProducts); 
        setNavCart(updatedProducts.length); 
        setCart(updatedProducts.length); 
        
        toast(`${product.name} added to cart`);
    }


    const tagColors = {
        "new": "bg-blue-100 text-blue-600",
        "popular": "bg-green-100 text-green-600",
        "best seller": "bg-orange-100 text-orange-600",
        "default": "bg-gray-100 text-gray-600"
    };

    const colorClass = tagColors[product.tag] || tagColors.default;


    return (
        <div className=" w-full h-auto rounded-3xl border border-gray-100 bg-white p-6 shadow-sm relative">
            
            <div className="absolute top-6 right-6">
                <span className={`${colorClass} text-xs font-semibold px-3 py-1 rounded-full`}>
                {product.tag}
                </span>
            </div>

            <div className="mb-6">
                <div className="w-13 h-13 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 p-2">
                <img src={product.icon} alt="product" />
                </div>
            </div>

            
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {product.description}
            </p>

            
            <div className="flex items-baseline mb-8">
                <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                <span className="text-gray-400 ml-1 text-sm">/{product.period}</span>
            </div>

            <ul className="space-y-4 mb-8">
                {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                       <Check></Check> {feature}
                    </li>
                ))}
            </ul>


            <button onClick={handleButton} className={`w-full ${isClicked ? "bg-green-600" : "bg-[#8b2cf5]" } btn  text-white font-bold py-4 rounded-full transition-colors duration-200`}>
                {isClicked ? "Added to cart" : "Buy Now"}
            </button>


        </div>
    );
};

export default Cards;