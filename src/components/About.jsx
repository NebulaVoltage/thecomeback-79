import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Section Eyebrow */}
        <div className="section-tag">
          01 // ABOUT
        </div>

        {/* Editorial Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-[#FAFAFA] mb-16 leading-tight font-[Manrope]">
          ENGINEERING ACROSS TWO WORLDS.
        </h2>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-white/65 text-base md:text-lg font-normal leading-relaxed">
            <p>
              I operate at the convergence of physical electronics and software architecture. 
              My background in Electronics & Communication Engineering delivers a first-principles understanding of signal dynamics, semiconductor logic, microcontrollers, and communication hardware.
            </p>
            <p>
              In parallel, my software work centers on robust Data Structures & Algorithms, modern Web Development, and AI/ML models. Bridging low-level physical signals with high-level software abstraction enables building systems that are both computationally fast and physically grounded.
            </p>
            <p>
              Whether engineering graph-based robot navigation, simulating signal sampling and aliasing behavior, or constructing full-stack software applications, I focus on precision, efficiency, and clean design.
            </p>
          </div>

          {/* Right Column: Disciplines Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="editorial-card p-7">
              <div className="mono text-xs text-white/40 mb-3 uppercase tracking-wider">01 // HARDWARE & EMBEDDED</div>
              <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2 uppercase">Electronics & Embedded Systems</h3>
              <p className="text-sm text-white/60 leading-relaxed font-normal">
                Microcontroller architectures (Arduino, C/C++), analog & digital circuits, sensor integration, and signal analysis.
              </p>
            </div>

            <div className="editorial-card p-7">
              <div className="mono text-xs text-white/40 mb-3 uppercase tracking-wider">02 // SOFTWARE & ALGORITHMS</div>
              <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2 uppercase">Data Structures & Web</h3>
              <p className="text-sm text-white/60 leading-relaxed font-normal">
                Graph algorithms (Dijkstra, A*), trees, search methods, Java, Python, JavaScript, and responsive web platforms.
              </p>
            </div>

            <div className="editorial-card p-7">
              <div className="mono text-xs text-white/40 mb-3 uppercase tracking-wider">03 // SIGNALS & AI</div>
              <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2 uppercase">DSP & Intelligent Systems</h3>
              <p className="text-sm text-white/60 leading-relaxed font-normal">
                Digital signal processing (sampling, modulation), gradient descent, classification, and statistical ML fundamentals.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
