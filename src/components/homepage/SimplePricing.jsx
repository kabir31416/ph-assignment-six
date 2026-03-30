import { Check } from 'lucide-react';
import React from 'react';

const SimplePricing = () => {
    return (
        <div className='flex flex-col gap-10 p-3 lg:px-50 lg:py-25 '>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='font-extrabold text-center text-3xl lg:text-5xl'>Simple, Transparent Pricing</h1>
                <p className='text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='bg-gray-50 rounded-3xl shadow p-4'>
                        <h1 className='font-bold text-3xl'>Starter</h1>
                        <p>Perfect for getting started</p>

                        <h1 className='my-6'><span className='font-bold text-[40px]'>$0</span><span>/Month</span></h1>

                        <ul>
                            <li className='flex'><Check></Check> Access to 10 free tools</li>
                            <li className='flex'><Check></Check> Basic templates</li>
                            <li className='flex'><Check></Check> Community support</li>
                            <li className='flex'><Check></Check> 1 project per month</li>
                        </ul>

                        <button className='rounded-full btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 mt-8  hover:cursor-pointer'>Get Started Free</button>
                    </div>

                    <div className='relative border rounded-3xl shadow p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                        
                        <div className="absolute -top-3 flex items-center justify-center left-1/2 -translate-x-1/2 w-fit h-fit rounded-full bg-[#FEF3C6] shadow p-2">
                        <span className="text-xs font-bold text-[#BB4D00]">MOST POPULAR</span>
                        </div>

                        <div className='flex flex-col justify-start'>
                            <h1 className='font-bold text-3xl'>Pro</h1>
                        <p>Best for professionals</p>

                        <h1 className='my-6'><span className='font-bold text-[40px]'>$29</span><span>/Month</span></h1>

                        <ul>
                            <li className='flex'><Check></Check> Access to all premium tools</li>
                            <li className='flex'><Check></Check> Unlimited templates</li>
                            <li className='flex'><Check></Check> Priority support</li>
                            <li className='flex'><Check></Check> Unlimited projects</li>
                            <li className='flex'><Check></Check> Cloud sync</li>
                            <li className='flex'><Check></Check> Advanced analytics</li>
                        </ul>

                        <button className='rounded-full btn w-full text-purple-700 bg-white p-2 mt-8  hover:cursor-pointer'>Get Started Free</button>
                        </div>
                    </div>

                    <div className='bg-gray-50 rounded-3xl shadow p-4'>
                        <h1 className='font-bold text-3xl' >Enterprise</h1>
                        <p>For teams and businesses</p>

                        <h1 className='my-6'><span className='font-bold text-[40px]'>$99</span><span>/Month</span></h1>

                        <ul>
                            <li className='flex'><Check></Check> Everything in Pro</li>
                            <li className='flex'><Check></Check> Team collaboration</li>
                            <li className='flex'><Check></Check> Custom integrations</li>
                            <li className='flex'><Check></Check> Dedicated support</li>
                            <li className='flex'><Check></Check> SLA guarantee</li>
                            <li className='flex'><Check></Check> Custom branding</li>
                        </ul>

                        <button className='rounded-full btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 mt-8 hover:cursor-pointer'>Get Started Free</button>
                    </div>
            </div>
        </div>
    );
};

export default SimplePricing;