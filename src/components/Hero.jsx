import React, { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay muted video notice:", err);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-[#050505] select-none">
      
      {/* 1. CINEMATIC BACKGROUND VIDEO (z-index: 0) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4"
      />

      {/* 2. DARK CINEMATIC OVERLAYS (z-index: 1) */}
      {/* Left-side gradient to ensure max readability of left text while preserving right portal */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.65) 42%, rgba(5,5,5,0.15) 100%)'
        }}
      />
      {/* Top & Bottom Vignettes */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0) 25%, rgba(5,5,5,0) 75%, rgba(5,5,5,0.95) 100%)'
        }}
      />

      {/* 3. HERO CONTENT COMPOSITION (z-index: 10, LEFT ALIGNED) */}
      <div className="absolute left-[5vw] top-[20vh] md:top-[24vh] z-10 w-[90vw] md:w-[42vw] max-w-[600px] flex flex-col items-start text-left">
        
        {/* Eyebrow */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.08em] text-white/70 uppercase mb-3 font-[Manrope]">
          ELECTRONICS & COMMUNICATION ENGINEERING
        </p>

        {/* Heading (Two Lines, Weight 400) */}
        <h1 
          className="font-normal text-[#FAFAFA] tracking-[-0.04em] uppercase mb-4 leading-[0.95] font-[Manrope]"
          style={{ fontSize: 'clamp(3.2rem, 5.2vw, 5.3rem)' }}
        >
          SHREEHITH SAI <br />
          VODAPALLY
        </h1>

        {/* Description (Max 2 lines) */}
        <p className="text-sm md:text-base text-white/60 font-normal leading-relaxed max-w-[540px] mb-8 font-[Manrope]">
          Building at the intersection of electronics, software, embedded systems, and intelligent systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            data-cursor="VIEW"
            className="inline-flex items-center justify-center px-7 h-[44px] rounded-full bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shadow-2xl hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download="Shreehith_Vodapally_Resume.pdf"
            data-cursor="OPEN"
            className="inline-flex items-center justify-center px-7 h-[44px] rounded-full bg-transparent border border-white/20 hover:border-white/60 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-white/5"
          >
            View Resume
          </a>
        </div>

      </div>

      {/* 4. SUBTLE BOTTOM LABELS STRIP (z-index: 10) */}
      <div className="absolute bottom-[28px] md:bottom-[40px] left-1/2 -translate-x-1/2 z-10 flex items-center gap-6 md:gap-10 text-[11px] md:text-[13px] mono text-white/45 tracking-widest uppercase pointer-events-none">
        <span>ECE</span>
        <span>&bull;</span>
        <span>SOFTWARE</span>
        <span>&bull;</span>
        <span>EMBEDDED</span>
        <span>&bull;</span>
        <span>AI / ML</span>
      </div>

    </section>
  );
}
