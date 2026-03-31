import React from 'react';

const Workflow = () => {
    return (
        <div className='flex flex-col items-center gap-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-5 lg:px-50 lg:py-25 '>
            <h1 className='font-extrabold text-center text-3xl lg:text-5xl'>Ready to Transform Your Workflow?</h1>
            <p className='text-center'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>

            <div className='flex gap-4'>
                <button className='bg-white btn rounded-full text-purple-700 p-2 w-40 hover:cursor-pointer'>Explore Products</button>
                <button className='border btn bg-transparent text-white border-white rounded-full p-2 w-40 hover:cursor-pointer'>View Pricing</button>
            </div>

            <p className='text-center'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;