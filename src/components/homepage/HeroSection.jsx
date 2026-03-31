import React from 'react';
import hero from '../../assets/banner.png'
import Play from '../../assets/play.png'

const HeroSection = () => {
    return (
        <div className='flex flex-col items-center gap-6 p-6 lg:flex-row lg:py-25 lg:px-50 lg:gap-10'>

            <div className='flex flex-col gap-4 items-center lg:justify-start lg:items-start'>
                <div className='flex items-center justify-center gap-1 bg-[#E1E7FF] rounded-4xl p-1 w-fit lg:justify-start'>
                    <div className="relative flex items-center justify-center h-6 w-6">

                        <div className="absolute inset-0 bg-purple-300 rounded-full opacity-60"></div>
                        <div className="relative flex items-center justify-center h-4 w-4 bg-purple-400 rounded-full shadow-md">
                        <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
                        </div>
                    </div>

                    <span className="text-[#7A2BFF] font-medium whitespace-nowrap text-md lg:text-lg">
                        New: AI-Powered Tools Available
                    </span>
                </div>

                <h1 className='font-extrabold text-3xl text-center text-[#101727] lg:text-7xl lg:text-start'>Supercharge Your <br></br> Digital Workflow</h1>
                <p className='text-center lg:text-start'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                <div className='flex gap-4 items-center justify-center lg:justify-start'>
                    <button className='rounded-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:cursor-pointer'>
                        Explore Products
                    </button>
                    <button className='rounded-full btn bg-white text-purple-600 border border-purple-600  hover:cursor-pointer flex items-center'>
                     <span className='mr-1'><img src={Play} alt="play" /></span> Watch Demo
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