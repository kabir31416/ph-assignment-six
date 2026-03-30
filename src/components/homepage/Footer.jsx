import React from 'react';
import Facebook from '../../assets/Social/Facebook.png'
import Twitter from '../../assets/Social/Twitter.png'
import Instragram from '../../assets/Social/Instagram.png'

const Footer = () => {
    return (
        <div className='px-50 pt-25 pb-10 bg-[#101727] text-white'>
            <div className='flex justify-between'>
                  <div>
                    <h1 className='font-extrabold text-4xl mb-4'>DigiTools</h1>
                    <p>Premium digital tools for creators,<br/>professionals, and businesses. Work smarter <br/>with our suite of powerful tools.</p>
                  </div>

                  <div>
                    <h1 className='font-bold text-2xl mb-2'>Product</h1>
                    <ul className='flex flex-col gap-3'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className='font-bold text-2xl mb-2'>Company</h1>
                    <ul className='flex flex-col gap-3'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className='font-bold text-2xl mb-2'>Resources</h1>
                    <ul className='flex flex-col gap-3'>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className='font-bold text-2xl mb-2'>Social Link</h1>
                    <div className='flex gap-2'>
                        <img src={Facebook} alt="fb" />
                        <img src={Twitter} alt="x" />
                        <img src={Instragram} alt="ig" />
                    </div>
                  </div>

            </div>

            <div className='bg-white h-px mt-20'></div>


            <div className='flex justify-between mt-8'>
                <h1>© 2026 Digitools. All rights reserved.</h1>
                <ul className='flex gap-10'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;