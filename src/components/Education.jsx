import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const COURSEWORK = [
    'Digital Signal Processing (DSP)',
    'Signals & Systems',
    'Microcontrollers & Embedded Systems',
    'Analog & Digital Electronics',
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Communication Systems & Modulation',
    'Computer Networks',
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Eyebrow */}
        <div className="section-tag">
          04 // EDUCATION
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#FAFAFA] mb-12">
          ACADEMIC FOUNDATION.
        </h2>

        {/* Education Card */}
        <div className="clean-card p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/12 text-xs mono text-neutral-300 uppercase">
                <GraduationCap className="w-4 h-4 text-white" />
                <span>UNDERGRADUATE DEGREE</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA] uppercase leading-tight">
                ELECTRONICS & COMMUNICATION ENGINEERING
              </h3>

              <p className="mono text-sm text-[#a7a6a6] uppercase tracking-wider">
                Bachelor of Technology (B.Tech)
              </p>
            </div>

            {/* Relevant Coursework */}
            <div className="lg:col-span-5 space-y-4">
              <span className="mono text-xs font-semibold text-white/50 tracking-widest uppercase block">
                // RELEVANT COURSEWORK
              </span>
              <div className="flex flex-wrap gap-2">
                {COURSEWORK.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded bg-white/5 border border-white/12 text-xs font-medium text-[#FAFAFA]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
