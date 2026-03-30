import React, { useState } from 'react';
import logo from '../../assets/DigiTools.png'
import cart from '../../assets/products/shopping-cart.png'
import { Menu, X } from 'lucide-react';

const Navbar = ({navCart}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100'>
            
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16 lg:h-20'>
                    
                    <div className='shrink-0'>
                        <img className='h-8 w-auto lg:h-10' src={logo} alt="Logo" />
                    </div>

                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-8 text-sm font-semibold text-gray-600'>
                            <li><a href="#product">Products</a></li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-2 sm:gap-4'>
                        
                        <div className='relative p-2 cursor-pointer'>
                            <img className='h-6 w-6' src={cart} alt="cart" />
                            {navCart > 0 && (
                                <div className="absolute top-1 right-0 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-2 border-white shadow-sm">
                                    <span className="text-[9px] font-bold text-white">{navCart}</span>
                                </div>
                            )}
                        </div>

                        <div className='hidden sm:flex items-center gap-4'>
                            <h1 className='text-sm font-bold text-gray-700'>Login</h1>
                            <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:opacity-90 transition-all cursor-pointer whitespace-nowrap'>
                                Get Started
                            </button>
                        </div>

                        
                        <div className='lg:hidden flex items-center ml-2'>
                            <button onClick={() => setIsOpen(!isOpen)} className='text-gray-600 p-1'>
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} bg-white border-t border-gray-100`}>
                <ul className='px-6 py-6 space-y-4 font-semibold text-gray-700'>
                    <li onClick={() => setIsOpen(false)}><a href="#product">Products</a></li>
                    <li onClick={() => setIsOpen(false)}>Features</li>
                    <li onClick={() => setIsOpen(false)}>Pricing</li>
                    <li onClick={() => setIsOpen(false)}>FAQ</li>
                    <hr className='border-gray-100' />
                    <div className='flex flex-col gap-4 pt-2'>
                        <button className='w-full py-3 text-[#4F39F6] font-bold border border-[#4F39F6] rounded-xl'>Login</button>
                        <button className='w-full py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-xl shadow-lg'>Get Started</button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;