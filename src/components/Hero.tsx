"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center text-center font-sans">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-zippy-orange/40 to-black/80 z-10" />
        {/* Placeholder for video - using a stylized background for now */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          {/* Real video tag would go here */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60 grayscale-[0.2]"
            poster="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          >
            {/* The user asked for a placeholder, but I can put a sample equestrian video if I find a reliable URL. 
                For now, I'll use a high-quality stock video placeholder if available, otherwise just the image. */}
            <source src="https://player.vimeo.com/external/454503827.sd.mp4?s=3401763c32e5d774b706f366e63777d10e542566&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">
        <h1 className="text-[#F2EBD9] text-4xl md:text-7xl font-normal tracking-tight mb-8 mt-12 animate-slide-up">
          Real Riding.<br className="md:hidden" /> Real Feeling.
        </h1>

        <p className="text-[#F2EBD9]/90 text-md md:text-lg max-w-2xl mb-7 font-light leading-relaxed animate-slide-up [animation-delay:200ms]">
          Bangalore&apos;s riding center for anyone who&apos;s ever been curious about horses.<br className="hidden md:block" />
          No experience needed. Just show up.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 animate-slide-up [animation-delay:400ms]">
          <button className="px-10 py-5 bg-[#DA7347] text-[#F2EBD9] font-normal text-sm tracking-[0.15em] rounded-sm hover:bg-white hover:text-zippy-orange transition-all duration-300 shadow-2xl">
            Book a trial ride
          </button>
          <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-[#F2EBD9] font-normal text-sm tracking-[0.15em] rounded-sm hover:bg-white/20 transition-all duration-300">
            Explore Programs
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
