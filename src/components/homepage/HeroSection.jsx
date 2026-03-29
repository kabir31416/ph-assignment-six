import React from 'react';
import hero from '../../assets/banner.png'

const HeroSection = () => {
    return (
        <div className='flex items-center py-15 px-50 gap-10'>

            <div className='flex flex-col gap-4 '>
                <div className='flex gap-1 bg-[#E1E7FF] rounded-4xl p-2 w-fit'>
                    <div class="relative flex items-center justify-center h-8 w-8">

                    <div class="absolute inset-0 bg-[#C7D0FF] rounded-full opacity-60"></div>
                    <div class="relative flex items-center justify-center h-5 w-5 bg-linear-to-br from-[#4F39F6] to-[#9514FA] rounded-full shadow-md">
                        <div class="h-2 w-2 bg-white/80 rounded-full"></div>
                    </div>

                    </div>

                    <span class="text-[#7A2BFF] font-medium text-lg whitespace-nowrap">
                        New: AI-Powered Tools Available
                    </span>
                </div>

                <h1 className='font-extrabold text-7xl text-[#101727]'>Supercharge Your <br></br> Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                <div className='flex gap-4'>
                    <button className='rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 hover:cursor-pointer'>
                        Explore Products
                    </button>
                    <button className='rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 hover:cursor-pointer'>
                        Watch Demo
                    </button>
                </div>
            </div>

            <div>
                <img src={hero} alt="" />
            </div>
            
        </div>
    );
};

export default HeroSection;