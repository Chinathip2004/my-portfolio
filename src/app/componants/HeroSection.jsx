"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = ({ emailRef }) => {
    
    const handleHireMeClick = () => {
        if (emailRef?.current) {
            emailRef.current.scrollIntoView({ behavior: "smooth" }); // ✅ เลื่อนลงไปที่ EmailSection
        }
    };

    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hi, I'm{" "}</span>
                        <TypeAnimation
                            sequence={[
                                'Chinathip',
                                1000,
                                'Web Developer',
                                1000,
                                'Frontend Dev',
                                1000
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg-text-xl'>
                        I'm a Front-End Developer based in Nonthaburi, Thailand. 
                        I'm looking for an Internship.
                    </p>
                    <div>
                        {/* ✅ ปุ่มกดแล้วเลื่อนลงไปที่ EmailSection */}
                        <button 
                            onClick={handleHireMeClick}
                            className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 via-purple-400 to-pink-500 hover:bg-slate-200 text-white'>
                            Hire me 
                        </button>

                        {/* ✅ ปุ่มดาวน์โหลด Resume */}
                        <a 
                            href='/images/chinathip-s-resume.pdf'
                            download="Chinathip_Resume.pdf"
                            className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500 hover:bg-slate-800 text-white mt-3 inline-block'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download Resume
                            </span>
                        </a>
                    </div>
                </div>

                {/* ✅ รูปภาพโปรไฟล์ */}
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#2c2c2c] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center'> 
                        <Image
                            src={'/images/jinwoo.png'}
                            alt='Profile Picture'
                            width={300}
                            height={300}
                            className='rounded-full'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
