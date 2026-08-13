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

      {/* 2. CINEMATIC MONOCHROME OVERLAY (z-index: 1) */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.72) 42%, rgba(5,5,5,0.15) 100%)'
        }}
      />
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(5,5,5,0.65) 0%, rgba(5,5,5,0) 22%, rgba(5,5,5,0) 75%, rgba(5,5,5,0.95) 100%)'
        }}
      />

      {/* 3. HERO CONTENT COMPOSITION (z-index: 10, LEFT SIDE) */}
      <div className="absolute left-[5vw] top-[21vh] md:top-[23vh] z-10 w-[90vw] md:w-[46vw] max-w-[620px] flex flex-col items-start text-left animate-fade-up">
        
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.12em] text-white/70 uppercase mb-4 font-[Manrope]">
          ELECTRONICS & COMMUNICATION ENGINEERING
        </p>

        {/* Large Elegant Heading (Font weight: 400) */}
        <h1 
          className="font-normal text-[#FAFAFA] tracking-[-0.04em] uppercase mb-5 leading-[0.95] font-[Manrope]"
          style={{ fontSize: 'clamp(3.5rem, 5vw, 5.3rem)' }}
        >
          SHREEHITH SAI <br />
          VODAPALLY
        </h1>

        {/* Description */}
        <p className="text-[15px] md:text-[18px] text-white/65 font-normal leading-relaxed max-w-[520px] mb-8 font-[Manrope]">
          Building at the intersection of electronics, software, embedded systems, and intelligent systems.
        </p>

        {/* CTA Buttons (Height: 42px) */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 h-[42px] rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shadow-xl"
          >
            VIEW MY WORK
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 h-[42px] rounded-full bg-transparent border border-white/20 hover:border-white/60 text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-white/5"
          >
            VIEW RESUME
          </a>
        </div>

      </div>

      {/* 4. BOTTOM METADATA LABELS STRIP (z-index: 10) */}
      <div className="absolute bottom-[28px] md:bottom-[36px] left-1/2 -translate-x-1/2 z-10 flex items-center gap-6 md:gap-10 text-[11px] md:text-[13px] mono text-white/50 tracking-widest uppercase pointer-events-none">
        <span>ECE</span>
        <span className="text-white/20">&bull;</span>
        <span>SOFTWARE</span>
        <span className="text-white/20">&bull;</span>
        <span>EMBEDDED</span>
        <span className="text-white/20">&bull;</span>
        <span>AI / ML</span>
      </div>

    </section>
  );
}
