import React, { useState, useEffect } from 'react';

import heroImage from '../assets/heroImage.png';
import Navbar from './Navbar';

import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className=''>
            <div className='landing-1 bg-antiwhite-500 w-full h-[38.75rem]'>
                <Navbar />

                <div className='flex'>
                    <div className='w-[40%] animate-fadeIn animate-delay-[750ms] animate-duration-1000 ml-40 my-auto'>
                        <h2 className='w-full text-4xl leading-10 tracking-normal font-semibold text-jet-500'>
                            Quickly learn any concept with ease
                        </h2>

                        <h3 className='w-full mt-8 text-lg text-jet-400'>
                            Translatify lets you translate any YouTube video clip into your preferred language - all in real-time. This way, you can learn any concept quickly and easily.
                        </h3>

                        <div onClick={() => navigate("/getStarted")} className='mt-10 animate-fadeIn animate-delay-[600ms]'>
                            <a class="relative rounded-lg px-5 py-2.5 overflow-hidden group bg-princeton-500 hover:bg-gradient-to-r hover:from-princeton-500 hover:to-princeton-400 text-raisin-500 font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-princeton-400 transition-all ease-out duration-300">
                                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span class="relative text-antiwhite-300">Get Started</span>
                            </a>
                        </div>
                    </div>

                    <div className='ml-40 animate-fadeIn animate-delay-[750ms] justify-center'>
                        <img src={heroImage} className='w-[25rem] h-[25rem]' alt='Hero Image' />
                    </div>
                </div>
            </div>
            <div className='bg-antiwhite-500 w-full h-[34rem] '>
                <div id="how_it_works" className='flex justify-center'>
                    <h2 className='font-bold animate-fadeIn animate-delay-[750ms] text-jet-500 text-4xl'>
                        How Translatify works
                    </h2>
                </div>

                <div className='group mx-auto space-y-5 mt-10 card-group justify-center w-[47%] '>

                    <div className=''>
                        <div className='border-2 card rounded-xl flex hover:animate-pulse hover:bg-bittersweet-100 hover:border-bittersweet-400 transition ease-in my-auto border-jet-500 h-32'>
                            <div className='w-14 h-14 flex border border-jet-500 justify-center my-auto -ml-7 rounded-full bg-bittersweet-400'>
                                <p className='text-4xl text-antiwhite-500  my-auto font-semibold'>
                                    1
                                </p>
                            </div>
                            <p className='text-jet-500 ml-12 my-auto font-semibold text-3xl'>
                                Paste video link
                            </p>
                        </div>
                    </div>

                    <div className=''>
                        <div className='border-2 card rounded-xl flex hover:animate-pulse hover:bg-bittersweet-100 hover:border-bittersweet-400 transition ease-in my-auto border-jet-500 h-32'>
                            <div className='w-14 h-14 flex border border-jet-500 justify-center my-auto -ml-7 rounded-full bg-bittersweet-400'>
                                <p className='text-4xl text-antiwhite-500 my-auto font-semibold'>
                                    2
                                </p>
                            </div>
                            <p className='text-jet-500 ml-12 my-auto font-semibold text-3xl'>
                                Download subtitles
                            </p>
                        </div>
                    </div>

                    <div className=''>
                        <div className='border-2 card rounded-xl flex hover:animate-pulse hover:bg-bittersweet-100 hover:border-bittersweet-400 transition ease-in my-auto border-jet-500 h-32'>
                            <div className='w-14 h-14 flex border border-jet-500 justify-center my-auto -ml-7 rounded-full bg-bittersweet-400'>
                                <p className='text-4xl text-antiwhite-500  my-auto font-semibold'>
                                    3
                                </p>
                            </div>
                            <p className='text-jet-500 ml-12 my-auto font-semibold text-3xl'>
                                AI reads audio
                            </p>
                        </div>
                    </div>

                    <div className=''>
                        <div className='border-2 card rounded-xl flex hover:animate-pulse hover:bg-bittersweet-100 hover:border-bittersweet-400 transition ease-in my-auto border-jet-500 h-32'>
                            <div className='w-14 h-14 flex border border-jet-500 justify-center my-auto -ml-7 rounded-full bg-bittersweet-400'>
                                <p className='text-4xl text-antiwhite-500 my-auto font-semibold'>
                                    4
                                </p>
                            </div>
                            <p className='text-jet-500 ml-12 my-auto font-semibold text-3xl'>
                                Paste video link
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}