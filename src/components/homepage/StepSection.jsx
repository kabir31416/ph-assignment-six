import React from 'react';
import user from '../../assets/user.png'
import pack from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const StepSection = () => {
    return (
        <div className='py-25 px-50 bg-[#F9FAFC] flex flex-col gap-10'>
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='font-extrabold text-7xl'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid sm:grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4'>

                <div className="relative flex flex-col items-center p-8 border border-gray-100 rounded-3xl shadow-sm bg-white">
                    <div className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow">
                        <span className="text-xs font-bold text-white">01</span>
                    </div>
                    <div className='h-20 w-20 bg-[#efe7fc] rounded-full flex items-center justify-center'>
                        <img className='h-15 w-15' src={user} alt="" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-3">Create Account</h1>
                    <p className="text-gray-500 text-center">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

                <div className="relative flex flex-col items-center p-8 border border-gray-100 rounded-3xl shadow-sm bg-white">
                    <div className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow">
                        <span className="text-xs font-bold text-white">02</span>
                    </div>
                    <div className='h-20 w-20 bg-[#efe7fc] rounded-full flex items-center justify-center'>
                        <img className='h-15 w-15' src={pack} alt="" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-3">Choose Products</h1>
                    <p className="text-gray-500 text-center">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>

                <div className="relative flex flex-col items-center p-8 border border-gray-100 rounded-3xl shadow-sm bg-white">
                    <div className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow">
                        <span className="text-xs font-bold text-white">03</span>
                    </div>
                    <div className='h-20 w-20 bg-[#efe7fc] rounded-full flex items-center justify-center'>
                        <img className='h-15 w-15' src={rocket} alt="" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-3">Start Creating</h1>
                    <p className="text-gray-500 text-center">
                        Download and start using your premium tools immediately.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default StepSection;