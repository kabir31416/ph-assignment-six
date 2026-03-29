import React from 'react';

const Statistics = () => {
    return (
        <div className=''>

            <div className='flex justify-between px-50 py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-extrabold text-[60px]'>50K+</h1>
                    <p className='font-medium text-6'>Active Users</p>
                </div>

                <div className='w-px h-80% bg-white'></div>

                <div className='flex flex-col items-center'>
                    <h1 className='font-extrabold text-[60px]'>200+</h1>
                    <p className='font-medium text-6' >Premium Tools</p>
                </div>

                <div className='w-px h-80% bg-white'></div>

                <div className='flex flex-col items-center'>
                    <h1 className='font-extrabold text-[60px]'>4.9</h1>
                    <p className='font-medium text-6' >Rating</p>
                </div>


            </div>
            
        </div>
    );
};

export default Statistics;