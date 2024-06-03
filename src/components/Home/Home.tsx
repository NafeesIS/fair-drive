"use client"
import React, { useState } from 'react';
import imageOne from '../../../public/Fairdrive_page-0001.jpg'
import imageTwo from '../../../public/Fairdrive_page-0002.jpg'
import imageThree from '../../../public/Fairdrive_page-0003.jpg'
import imageFour from '../../../public/Fairdrive_page-0004.jpg'
import imageEight from '../../../public/Fairdrive_page-0008.jpg'
import imageTwelve from '../../../public/Fairdrive_page-0012.jpg'
import imageFifteen from '../../../public/Fairdrive_page-0015.png'
import logo from '../../../public/Fairdrive_logo.jpg'

import Image from 'next/image';
const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
        <div>
<div className='h-16 w-full bg-white px-1 lg:px-8 py-2 flex justify-between items-center'>
      <Image className='h-6 w-16 lg:h-12 lg:w-40' alt='home' src={logo} />
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-xl'>
          {menuOpen ? 'times' : 'bar'}
        </button>
      </div>
      <div className={`md:flex items-center gap-1 md:gap-4 md:text-base text-xs ${menuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white z-10' : 'hidden'}`}>
        <p className='py-2'>Home</p>
        <p className='py-2'>Introduction</p>
        <p className='py-2'>Product</p>
        <p className='py-2'>Team</p>
      </div>
    </div>
            <Image alt='home' src={imageOne} />
            <Image alt='home' src={imageTwo} />
            <Image alt='home' src={imageThree} />
            <Image alt='home' src={imageFour} />
            <Image alt='home' src={imageEight} />
            <Image alt='home' src={imageTwelve} />
            <Image alt='home' src={imageFifteen} />
        </div>
    );
};

export default Hero;