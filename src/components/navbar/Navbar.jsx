import React from 'react';
import logo from '../../assets/DigiTools.png'
import cart from '../../assets/products/shopping-cart.png'

const Navbar = () => {
    return (
        <div className='flex justify-between py-5 px-50 m-auto items-center'>
            <div>
                <img className='h-10 w-45' src={logo} alt="logo" />
            </div>

            <div>
                <ul className='flex gap-3'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className='flex gap-3 items-center'>
                <img className='h-4 w-4' src={cart} alt="" />
                <h1>Login</h1>
                <button className='rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 hover:cursor-pointer'>Get Started</button>
            </div>
            
        </div>
    );
};

export default Navbar;