import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Eyebrow */}
        <div className="section-tag">
          01 // ABOUT
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#FAFAFA] mb-12 max-w-4xl leading-tight">
          ENGINEERING ACROSS TWO WORLDS.
        </h2>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Copy (Left Col) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#a7a6a6] text-base md:text-lg leading-relaxed">
            <p>
              I operate at the convergence of hardware physics and modern software engineering. 
              My background in Electronics & Communication Engineering provides a deep foundational understanding of how signal processing, logic gates, and microcontrollers interact with physical systems.
            </p>
            <p>
              Simultaneously, my work in software development focuses on rigorous Data Structures & Algorithms, modern web applications, and intelligent systems. By bridging low-level embedded hardware with high-level software architectures, I build solutions that are both physically efficient and computationally robust.
            </p>
            <p>
              Whether it's implementing graph-based pathfinding for autonomous robots, designing signal sampling and aliasing visualizers, or building interactive web platforms, my goal is to craft reliable, high-performance systems from first principles.
            </p>
          </div>

          {/* Core Pillars (Right Col) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="clean-card p-6">
              <div className="mono text-xs text-white/50 mb-2 uppercase">Core Discipline 01</div>
              <h3 className="text-lg font-bold text-[#FAFAFA] mb-2 uppercase">Electronics & Embedded Systems</h3>
              <p className="text-sm text-[#a7a6a6] leading-normal">
                Analog/Digital electronics, microcontroller programming (Arduino, C/C++), signal sampling, modulation, and sensor integration.
              </p>
            </div>

            <div className="clean-card p-6">
              <div className="mono text-xs text-white/50 mb-2 uppercase">Core Discipline 02</div>
              <h3 className="text-lg font-bold text-[#FAFAFA] mb-2 uppercase">Software & Algorithms</h3>
              <p className="text-sm text-[#a7a6a6] leading-normal">
                Advanced data structures (Trees, Graphs), pathfinding algorithms (Dijkstra, A*), Java, Python, JavaScript, and full-stack web applications.
              </p>
            </div>

            <div className="clean-card p-6">
              <div className="mono text-xs text-white/50 mb-2 uppercase">Core Discipline 03</div>
              <h3 className="text-lg font-bold text-[#FAFAFA] mb-2 uppercase">Intelligent Systems & DSP</h3>
              <p className="text-sm text-[#a7a6a6] leading-normal">
                Machine learning fundamentals, statistical gradient descent, frequency spectrum analysis, and signal processing simulations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
