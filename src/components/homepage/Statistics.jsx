import React from 'react';

const Statistics = () => {
    return (
        <div>

            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-12 lg:px-20 lg:py-16 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0'>

                
                <div className='flex flex-col items-center text-center'>
                    <h1 className='font-extrabold text-4xl lg:text-6xl'>50K+</h1>
                    <p className='font-medium text-lg lg:text-xl opacity-90'>Active Users</p>
                </div>

                <div className='hidden lg:block w-px h-16 bg-white/30'></div>
                <div className='lg:hidden w-20 h-px bg-white/20'></div>

                <div className='flex flex-col items-center text-center'>
                    <h1 className='font-extrabold text-4xl lg:text-6xl'>200+</h1>
                    <p className='font-medium text-lg lg:text-xl opacity-90'>Premium Tools</p>
                </div>

                <div className='hidden lg:block w-px h-16 bg-white/30'></div>
                <div className='lg:hidden w-20 h-px bg-white/20'></div>

                <div className='flex flex-col items-center text-center'>
                    <h1 className='font-extrabold text-4xl lg:text-6xl'>4.9</h1>
                    <p className='font-medium text-lg lg:text-xl opacity-90'>Rating</p>
                </div>

            </div>
            
        </div>
    );
};

export default Statistics;