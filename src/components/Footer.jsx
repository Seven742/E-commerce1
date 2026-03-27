import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import Logopayment from '../assets/Logopayment.png'

const Footer = () => {
    return (
        <div>

            <section className="relative mt-40 ">

                {/* Content Above */}
                <footer className='flex justify-around pt-36 mt-48 pb-10 mx-16 rounded-[50px] bg-sky-50'>
                    <div>
                        <h1 className='text-lg font-bold'>Logo</h1>
                        <ul className='flex flex-col gap-1 mt-7 text-[17px]'>
                            <li>Our Address:</li>
                            <li className='font-bold'>No. 869 General Trade Center,</li>
                            <li className='font-bold'>California, USA</li>
                            <li>24/7 Free Call:</li>
                            <li className='font-bold'>+1 (800) 333 456</li>
                        </ul>
                        <div className='flex items-center gap-3 mt-10 text-lg text-blue-600 cursor-pointer'>
                            <div className='p-3 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white'>
                                <FaXTwitter />
                            </div>
                            <div className='p-3 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white'>
                                <FiInstagram />
                            </div>
                            <div className='p-3 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white'>
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold text-blue-950'>Useful Links</h1>
                        <ul className='flex flex-col gap-1 text-[17px] cursor-pointer text-gray-700 mt-7'>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Our Shop
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Services
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    News
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Contacts
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold text-blue-950'>Support</h1>
                        <ul className='flex flex-col gap-1 text-[17px] cursor-pointer text-gray-700 mt-7'>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    FAQs
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Refund
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Privacy Policy
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Report
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    DMCA
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold text-blue-950'>Information</h1>
                        <ul className='flex flex-col gap-1 text-[17px] cursor-pointer text-gray-700 mt-7'>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    About Us
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Our Services
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Pricing Plan
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Vendor Shop
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Affiliate
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Stores
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold text-blue-950'>Services</h1>
                        <ul className='flex flex-col gap-1 text-[17px] cursor-pointer text-gray-700 mt-7'>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Products
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Payment
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Discount
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Promotional
                                </span>
                            </li>
                            <li className="flex items-center cursor-pointer group hover:text-blue-600">
                                <MdOutlineNavigateNext
                                    className="mr-2 transition-transform duration-300 group-hover:translate-x-2"
                                />
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Gifts
                                </span>
                            </li>
                        </ul>
                    </div>
                </footer>

                <div className="absolute 
                    left-1/2 
                    -translate-x-1/2 
                    bottom-[390px] 
                    w-[90%] 
                    max-w-6xl">

                    <div className="bg-blue-950 rounded-[50px] p-10">
                        {/* responsive laptop */}
                        <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-6 py-3 md:py-10 lg:py-10  bg-blue-950 rounded-[50px] md:mx-10 lg:mx-10">

                            {/* Left Text */}
                            <div className="text-center lg:text-left">
                                <h1 className="text-3xl font-bold text-white md:text-4xl">
                                    Our <span className="text-blue-500">Newsletter</span>
                                </h1>
                                <p className="mt-3 text-gray-400">
                                    Get updates by subscribe our weekly newsletter
                                </p>
                            </div>

                            {/* Right Input */}
                            <div className="flex items-center w-full mt-6 md:justify-center lg:mt-0 lg:w-auto">
                                <input
                                    type="text"
                                    placeholder="Enter your email..."
                                    className="w-full md:w-[450px] lg:w-[500px] 
                       px-6 py-4 text-white 
                       rounded-full outline-none 
                       bg-white/5"
                                />

                                <button className="py-4 px-9 ml-[-50px] 
                           bg-blue-600 text-white 
                           rounded-full 
                           hover:bg-white 
                           hover:text-blue-950 
                           transition">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <div className='flex justify-between items-center px-20 py-5'>
                <div className='text-gray-400'>
                    <h1>KS Computer Shop © 2026 All Rights Reserved.</h1>
                </div>
                <div>
                    <img src={Logopayment} alt="" className='h-6 w-full' />
                </div>
            </div>
        </div>
    )
}

export default Footer