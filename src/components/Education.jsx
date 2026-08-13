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
    <section id="education" className="py-28 md:py-36 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Section Eyebrow */}
        <div className="section-tag">
          04 // EDUCATION
        </div>

        {/* Editorial Heading */}
        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight text-[#FAFAFA] mb-16 font-[Manrope]">
          ACADEMIC FOUNDATION.
        </h2>

        {/* Editorial Card */}
        <div className="editorial-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Degree Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/12 text-xs mono text-white/70 uppercase">
                <GraduationCap className="w-4 h-4 text-white" />
                <span>UNDERGRADUATE DEGREE</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#FAFAFA] uppercase leading-tight font-[Manrope]">
                ELECTRONICS & COMMUNICATION ENGINEERING
              </h3>

              <p className="mono text-xs text-white/50 uppercase tracking-widest">
                Bachelor of Technology (B.Tech)
              </p>
            </div>

            {/* Right Relevant Coursework */}
            <div className="lg:col-span-6 space-y-4 lg:border-l lg:border-white/12 lg:pl-8">
              <span className="mono text-xs font-semibold text-white/40 tracking-widest uppercase block">
                // RELEVANT COURSEWORK
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                {COURSEWORK.map((course) => (
                  <span
                    key={course}
                    className="text-xs text-white/70 font-normal hover:text-white transition-colors"
                  >
                    {course} &bull;
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
