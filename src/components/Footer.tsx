"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer 
      className="relative w-full px-6 pt-48 pb-20 md:pb-32"
      style={{ 
        background: 'linear-gradient(to bottom, #FFF8E5 0%, #DA7347 15%, #DA7347 100%)' 
      }}
    >
      <div className="container mx-auto max-w-7xl">
          
          {/* Top CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 md:mb-40">
            {/* Left: Horse Rider Logo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
                <Image 
                  src="/assets/images/zippyfooter1.svg" 
                  alt="Zippy Horse Rider" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: CTA Text */}
            <div className="text-white text-center md:text-left">
              <h2 className="text-[36px] md:text-[64px] font-normal leading-[1.1] mb-6 tracking-tight max-w-lg mx-auto md:mx-0">
                The rider in you is just a ride away.
              </h2>
              <p className="text-sm md:text-md opacity-90 mb-10 max-w-md mx-auto md:mx-0 font-light leading-relaxed">
                Your first ride is 30 minutes away. Call us and let&apos;s get you started.
              </p>
              <button className="group flex items-center gap-4 px-8 py-4 border border-white/60 rounded-sm hover:bg-white hover:text-[#DA7347] transition-all duration-500 mx-auto md:mx-0">
                <span className="text-lg font-light">Book your trial ride</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-500 group-hover:translate-x-2"
                >
                  <path 
                    d="M5 12H19" 
                    stroke="currentColor" 
                    strokeWidth="1.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M12 5L19 12L12 19" 
                    stroke="currentColor" 
                    strokeWidth="1.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Branding & Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-white/10 pt-20">
            {/* Left: Branding */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-64 h-24 md:w-80 md:h-28">
                <Image 
                  src="/assets/images/zippyfooter2.svg" 
                  alt="Zippy Equestrian Center" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Link Columns */}
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div className="flex flex-col gap-5 text-white">
                <Link href="/programs" className="text-md md:text-lg opacity-80 hover:opacity-100 transition-opacity underline decoration-white/20 underline-offset-4">Riding programs</Link>
                <Link href="/about" className="text-md md:text-lg opacity-80 hover:opacity-100 transition-opacity underline decoration-white/20 underline-offset-4">About ZEC</Link>
                <Link href="/stories" className="text-md md:text-lg opacity-80 hover:opacity-100 transition-opacity underline decoration-white/20 underline-offset-4">Rider Stories</Link>
              </div>
              <div className="flex flex-col gap-5 text-white">
                <Link href="/beyond" className="text-md md:text-lg opacity-80 hover:opacity-100 transition-opacity underline decoration-white/20 underline-offset-4">Beyond the ride</Link>
                <Link href="/contact" className="text-md md:text-lg opacity-80 hover:opacity-100 transition-opacity underline decoration-white/20 underline-offset-4">Contact Zippy</Link>
              </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">
            <p>© 2026 Zippy Equestrian Center. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
    </footer>
  );
};

export default Footer;
