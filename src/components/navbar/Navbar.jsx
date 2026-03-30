import React from 'react';
import logo from '../../assets/DigiTools.png'
import cart from '../../assets/products/shopping-cart.png'

const Navbar = ({navCart}) => {
    return (
        <nav className='flex justify-between py-5 px-50 m-auto items-center sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200'> 
            <div>
                <img className='h-10 w-45' src={logo} alt="logo" />
            </div>

            <div>
                <ul className='flex gap-5'>
                    <li><a href="#product">Products</a></li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className='flex gap-3 items-center'>
                <div className='relative cursor-pointer mr-2'>
                    <img className='h-6 w-6' src={cart} alt="" />
                    {
                        navCart === 0 ? "" : (<div className="absolute -top-3 -right-4 flex items-center justify-center w-6 h-6 p-1 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow">
                        <span className="text-xs font-bold text-white">{navCart}</span>
                    </div>)
                    }
                </div>
                <h1>Login</h1>
                <button className='rounded-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 hover:cursor-pointer'>Get Started</button>
            </div>
            
        </nav>
    );
};

export default Navbar;