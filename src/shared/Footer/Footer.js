import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            <div className='grid grid-cols-4 bg-[#2C2727] px-28 gap-12 py-20 justify-center'>
                <div>
                    <div className='text-white'>
                        <h2 className='text-2xl uppercase font-bold tracking-widest'>TASNIM PRICILA</h2>
                        <small className='text-sm tracking-widest uppercase pl-1'>Wedding Photographer</small>
                    </div>
                    <p className='text-[#ABA9A9] mt-8 justify-items-center'>
                        When you found me, you know very well that you have found your princess. Because your smile is not only on your face but also in your heart and in your very being…
                    </p>
                </div>

                <div className='justify-self-center'>
                    <p className='text-xl text-white'>Company</p>
                    <ul className='mt-12 text-[#ABA9A9] leading-9'>
                        <li>
                            Latest News
                        </li>
                        <li>
                            Newsletter
                        </li>
                        <li>
                            Careers
                        </li>
                    </ul>
                </div>

                <div className='justify-self-center'>
                    <p className='text-xl text-white'>Support</p>
                    <ul className='mt-11 text-[#ABA9A9] leading-9'>
                        <li>
                            Our Proud Career
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Terms of use
                        </li>
                        <li>
                            Faq
                        </li>
                    </ul>
                </div>
                <div className='justify-self-end'>
                    <p className='text-xl text-white'>Contact</p>
                    <div className='mt-11 text-[#ABA9A9] leading-9'>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <p>Phone: +8801521-311110</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <p>support@tasnimpricila.com</p>
                        </div>
                        <div className='flex gap-3'>
                            <FontAwesomeIcon icon={faLocationPin} className='mt-2.5'></FontAwesomeIcon>
                            <p>Uttara - Jashim Uddin Avenue,
                                A.K Tower, Dhaka-1230, Bangladesh</p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div>

                </div>
                <div className='bg-black text-white px-24 py-8 flex justify-between'>
                    <p>
                        Copyright &copy; {year}. Powered by Tasnim Pricila. All rights reserved.
                    </p>
                    <div className='flex gap-6'>
                        <FontAwesomeIcon icon={faFacebookF} style={{cursor:'pointer'}}className='hover:text-fuchsia-700'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTwitter}  style={{cursor:'pointer'}}className='hover:text-fuchsia-700'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGooglePlusG} style={{cursor:'pointer'}}className='hover:text-fuchsia-700'></FontAwesomeIcon>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;