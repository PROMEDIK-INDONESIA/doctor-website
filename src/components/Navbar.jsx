'use client'

import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
import DokterLisaLogoBlack from '@/app/assets/dokter-lisa-name-transparent.png';
import DokterLisaLogoWhite from '@/app/assets/dokter-lisa-name-transparent-white.png';
import { useRouter } from "next/navigation";

function Navbar({ isOpen, setIsOpen }) {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef([]);
  const router = useRouter();
  const currentRoute = router.pathname; // Get the current route

  const handleNavigation = (path) => {
    setIsOpen(false); // Close sidebar
    router.push(path); // Navigate to the new page
  };

  const [logoSrc, setLogoSrc] = useState(DokterLisaLogoBlack);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (navRef.current) {
          navRef.current.classList.replace("bg-transparent", "bg-[#45959B]");
          navRef.current.classList.add("shadow-md");
        }
        menuRef.current.forEach((menuItem) => {
          if (menuItem) menuItem.classList.replace("text-black", "text-white");
        });
        setLogoSrc(DokterLisaLogoWhite); // Change the logo on scroll
      } else {
        if (navRef.current) {
          navRef.current.classList.replace("bg-[#45959B]", "bg-transparent");
          navRef.current.classList.remove("shadow-md");
        }
        menuRef.current.forEach((menuItem) => {
          if (menuItem) menuItem.classList.replace("text-white", "text-black");
        });
        setLogoSrc(DokterLisaLogoBlack); // Reset logo on top
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`select-none fixed top-0 left-0 w-full bg-transparent text-white px-6 py-2 z-50 transition-colors duration-300 ease-in-out ${isOpen ? "translate-x-64" : "translate-x-0"
        }`}
    >
      <div className='w-full grid grid-cols-3'>
        {/* Mobile Menu Icon */}
        <div className='md:hidden focus:outline-none flex items-center'>
          <div className='text-black' onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
        </div>
        {/* Desktop Menu */}
        <div className='max-md:hidden flex flex-row justify-start items-center gap-5'>
          {[
            { name: "Home", path: process.env.NODE_ENV === "production" ? "/doctors-personal-website/" : "/" },
            { name: "Articles", path: "/artikel" },
            { name: "FAQ", path: "/faq" }
          ].map((item, i) => (
            <div
              ref={(el) => (menuRef.current[i] = el)}
              key={i}
              onClick={() => handleNavigation(item.path)}
              aria-current={currentRoute === item.path ? "page" : undefined}
              className='text-black text-base hover:underline hover:cursor-pointer'
            // className="block w-full text-left py-2 px-4 rounded-lg transition-colors 
            //     hover:bg-white/20 
            //     aria-[current=page]:bg-white/30 aria-[current=page]:font-semibold"
            >
              {item.name}
            </div>
          ))}
          {/* <div className='text-base text-black'>Home</div>
          <div className='text-base text-black'>Artikel</div>
          <div className='text-base text-black'>FAQ</div> */}
        </div>
        {/* Logo */}
        <div className='w-full flex justify-self-center items-center max-w-35'>
          {/* <Image
            ref={logoRef}
            className="w-full max-w-35 mt-3"
            src={DokterLisaLogoBlack}
            alt="Dokter Lisa Logo"
          /> */}
          <Image
            className="w-full max-w-35 mt-3"
            src={logoSrc}
            alt="Dokter Lisa Logo"
            priority
          />
        </div>
        {/* Mobile Right Icons */}
        <div className='md:hidden w-full flex items-center justify-end'>
          <div className='w-7 h-7 p-1 group'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className='group-hover:fill-orange-400 fill-black'
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>
        </div>
        {/* Desktop Right Icons */}
        <div className='max-md:hidden flex flex-row gap-3 justify-end items-center'>
          <div className='w-7 h-7 bg-[#EDF2F6] p-1.5 rounded-sm flex items-center justify-center hover:bg-orange-400'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
          </div>
          <div className='w-7 h-7 bg-[#EDF2F6] p-1.5 rounded-sm flex items-center justify-center hover:bg-orange-400'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
          </div>
          <div className='w-7 h-7 bg-[#EDF2F6] p-1.5 rounded-sm flex items-center justify-center hover:bg-orange-400'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);