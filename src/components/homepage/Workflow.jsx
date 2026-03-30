import React from 'react';

const Workflow = () => {
    return (
        <div className='px-50 py-25 flex flex-col items-center gap-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
            <h1 className='font-extrabold text-4xl'>Ready to Transform Your Workflow?</h1>
            <p className='text-center'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>

            <div className='flex gap-4'>
                <button className='bg-white rounded-full text-purple-700 p-2 w-40 hover:cursor-pointer'>Explore Products</button>
                <button className='border border-white rounded-full p-2 w-40 hover:cursor-pointer'>View Pricing</button>
            </div>

            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;