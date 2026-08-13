import React from 'react';

export default function Journey() {
  const JOURNEY_STEPS = [
    {
      period: "2024 - PRESENT",
      title: "ECE CORE & ADVANCED SYSTEMS",
      focus: "Electronics & Communication Engineering Focus",
      desc: "Deepening knowledge in analog and digital electronics, microcontroller interfaces, signals and systems, Nyquist sampling theory, and communication hardware."
    },
    {
      period: "CURRENT FOCUS",
      title: "DATA STRUCTURES & ALGORITHMS MASTERY",
      focus: "Algorithmic Efficiency & Problem Solving",
      desc: "Implementing complex data structures—BST, AVL Trees, Segment Trees, Fenwick Trees, Graphs, and Dijkstra/A* pathfinding algorithms in Java and Python."
    },
    {
      period: "ONGOING",
      title: "EMBEDDED HARDWARE & SENSOR INTEGRATION",
      focus: "Arduino & Microcontroller Programming",
      desc: "Building hardware-software bridges using Arduino platforms, C/C++ sensor drivers, ADC sampling routines, and serial protocol communications."
    },
    {
      period: "EXPANSION",
      title: "AI / MACHINE LEARNING & INTELLIGENT WEB",
      focus: "Modern Web Apps & ML Exploration",
      desc: "Exploring classification models, gradient descent, search algorithms, and constructing high-performance React web interfaces."
    }
  ];

  return (
    <section id="journey" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-tag">04 / JOURNEY</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
            CURRENTLY BUILDING.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-xl">
            An authentic editorial timeline tracking academic development, technical milestones, and engineering growth.
          </p>
        </div>

        {/* Editorial Timeline Layout */}
        <div className="relative border-l border-[var(--border-color)] ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {JOURNEY_STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)] group-hover:bg-amber-400 group-hover:border-amber-400 transition-colors" />

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="mono text-xs font-bold text-amber-400 tracking-widest">
                    {step.period}
                  </span>
                  <span className="mono text-[10px] text-[var(--text-secondary)] uppercase">
                    {step.focus}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold tracking-tight text-[var(--text-primary)] uppercase mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
