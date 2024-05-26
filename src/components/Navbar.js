import React from 'react';
import Logo from '../assets/logo512.png';

import { useNavigate } from 'react-router-dom';

export default function () {

    const navigate = useNavigate();

    return (

        <nav className="sticky top-0 z-10 rounded-b-3xl py-2 bg-antiwhite-500 backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200">
            <div className="w-full mx-10 px-4">
                <div className="flex w-full items-center h-16">
                    <a href="/" class="flex w-[20%] items-center space-x-3 animate-fadeIn ">
                        <img src={Logo} class="h-14" alt="Translatify Logo" />
                        <span class="self-center text-3xl font-semibold whitespace-nowrap text-raisin-500">Translatify</span>
                    </a>
                    <div className="flex justify-center    w-[19rem] ml-10  space-x-6  text-base text-raisin-500 font-semibold">
                        <a className='hover:text-princeton-300 animate-fadeIn animate-delay-150' href="#">Home</a>
                        <a href="#how_it_works" className='hover:text-princeton-300 animate-fadeIn animate-delay-150'>How It Works</a>
                        
                        <a className='hover:text-princeton-300  cursor-pointer animate-fadeIn animate-delay-300' onClick={() => navigate("/getStarted")}>Get Started</a>
                    </div>

                    <div className='mt-1 scale-95  ml-[38rem] animate-fadeIn animate-delay-[600ms]'>
                        <a href="#_" class="relative rounded-lg px-5 py-2.5 overflow-hidden group bg-princeton-500 hover:bg-gradient-to-r hover:from-princeton-500 hover:to-princeton-400 text-raisin-500 font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-princeton-400 transition-all ease-out duration-300">
                            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span class="relative text-antiwhite-400">Log In</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>


        // <nav class="bg-white border-gray-200 dark:bg-gray-900">
        //     <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        //             <img src={Logo} class="h-8" alt="Translatify Logo" />
        //             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Translatify</span>
        //         </a>
        //         <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        //             <span class="sr-only">Open main menu</span>
        //             <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        //             </svg>
        //         </button>
        //         <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        //             <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        //                 <li>
        //                     <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

    )
}