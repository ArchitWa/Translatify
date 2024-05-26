import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

import { useNavigate } from 'react-router-dom';
import 'flowbite';

export default function GetStarted() {

    const navigate = useNavigate();

    return (
        <div className=''>
            <div className='landing-1 bg-antiwhite-500 w-full h-[38.75rem]'>
                <Navbar />

                <div className='flex mt-20'>
                    <div className='w-[40%] animate-fadeIn animate-delay-[750ms] animate-duration-1000 ml-40 my-auto'>
                        <h2 className='w-full text-4xl leading-10 tracking-normal font-semibold text-jet-500'>
                            Paste in your YouTube Link
                        </h2>

                        <div>
                            <input type="text" id="small-input" class="block mt-5 text-lg w-full p-2 text-jet-900 focus:outline-none  transition ease-in hover:border-raisin-500 border border-gray-300 rounded-lg bg-antiwhite-400 focus:ring-raisin-500 focus:border-raisin-500" />
                        </div>


                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white mt-8 bg-bittersweet-500 hover:bg-bittersweet-600 focus:ring-2 focus:outline-none transition ease-in focus:ring-bittersweet-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">Translate to <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>


                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Spanish</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">French</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">German</a>
                                </li>
                            </ul>
                        </div>

                        <div className='mt-8 animate-fadeIn animate-delay-[600ms]'>
                            <a onClick={() => navigate("/getStarted")} class="relative rounded-lg px-5 py-2.5 overflow-hidden group bg-princeton-500 hover:bg-gradient-to-r hover:from-princeton-500 hover:to-princeton-400 text-raisin-500 font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-princeton-400 transition-all ease-out duration-300">
                                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span class="relative text-sm text-antiwhite-300">Translate</span>
                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    )

}