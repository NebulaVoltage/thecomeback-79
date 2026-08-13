import React from 'react';
import { Radio, Cpu, Binary, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--border-color)] relative overflow-hidden bg-[var(--bg-primary)]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-tag">01 / ABOUT</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
            ENGINEERING ACROSS TWO WORLDS.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Statement Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            <p className="text-[var(--text-primary)] font-medium text-xl leading-snug">
              I work at the intersection of physical electronics and software systems—bridging hardware execution with high-level software abstraction.
            </p>
            <p>
              My background in <strong className="text-[var(--text-primary)] font-semibold">Electronics and Communication Engineering (ECE)</strong> provides me with a foundational understanding of physical signals, analog/digital communication systems, sampling theory, digital signal processing (DSP), and embedded hardware interfaces.
            </p>
            <p>
              Simultaneously, my work in <strong className="text-[var(--text-primary)] font-semibold">Software Engineering</strong> empowers me to model complex computational logic, craft robust data structures, implement machine learning algorithms, and build responsive, state-of-the-art web applications.
            </p>
            <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] mt-6 space-y-2">
              <span className="mono text-xs text-[var(--text-secondary)] tracking-widest uppercase block">
                // CORE PHILOSOPHY
              </span>
              <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium">
                "Understanding how a voltage waveform becomes discrete bits enables better software engineering; understanding how software structures data enables better physical system design."
              </p>
            </div>
          </div>

          {/* Interactive Visual Waveform & Progression Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl glass-card relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border-color)]">
                <span className="mono text-xs tracking-widest text-[var(--text-secondary)] uppercase">
                  ARCHITECTURE FLOW
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* SIGNAL -> COMPUTE -> CODE -> SYSTEM Progression List */}
              <div className="space-y-6">
                
                {/* 01 SIGNAL */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[var(--badge-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] shrink-0 group-hover:border-[var(--text-primary)] transition-colors">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="mono text-xs text-[var(--text-secondary)]">01</span>
                      <h3 className="mono font-bold text-sm text-[var(--text-primary)] tracking-widest uppercase">SIGNAL</h3>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Continuous voltages, sensors, sampling & noise reduction.
                    </p>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="pl-5 border-l-2 border-dashed border-[var(--border-color)] h-4 ml-5" />

                {/* 02 COMPUTE */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[var(--badge-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] shrink-0 group-hover:border-[var(--text-primary)] transition-colors">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="mono text-xs text-[var(--text-secondary)]">02</span>
                      <h3 className="mono font-bold text-sm text-[var(--text-primary)] tracking-widest uppercase">COMPUTE</h3>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Microcontrollers, ADC conversion, digital signal processing.
                    </p>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="pl-5 border-l-2 border-dashed border-[var(--border-color)] h-4 ml-5" />

                {/* 03 CODE */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[var(--badge-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] shrink-0 group-hover:border-[var(--text-primary)] transition-colors">
                    <Binary className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="mono text-xs text-[var(--text-secondary)]">03</span>
                      <h3 className="mono font-bold text-sm text-[var(--text-primary)] tracking-widest uppercase">CODE</h3>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Data structures, pathfinding algorithms, object-oriented logic.
                    </p>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="pl-5 border-l-2 border-dashed border-[var(--border-color)] h-4 ml-5" />

                {/* 04 SYSTEM */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[var(--badge-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] shrink-0 group-hover:border-[var(--text-primary)] transition-colors">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="mono text-xs text-[var(--text-secondary)]">04</span>
                      <h3 className="mono font-bold text-sm text-[var(--text-primary)] tracking-widest uppercase">SYSTEM</h3>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Full-stack applications, intelligent AI models, end-to-end integration.
                    </p>
                  </div>
                </div>

              </div>

              {/* Animated Waveform Background SVG */}
              <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                <svg className="w-full h-12 text-[var(--text-secondary)] opacity-40" viewBox="0 0 400 60" fill="none">
                  <path
                    d="M0 30 Q 25 5, 50 30 T 100 30 T 150 55 T 200 30 T 250 5 T 300 30 T 350 55 T 400 30"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                  <circle cx="200" cy="30" r="4" fill="currentColor" className="animate-ping" />
                </svg>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
