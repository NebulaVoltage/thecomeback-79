import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  // Configurable Education Data Structure
  const EDUCATION_DATA = {
    degree: "BACHELOR OF TECHNOLOGY",
    department: "ELECTRONICS & COMMUNICATION ENGINEERING",
    departmentAbbr: "ECE",
    institution: "[ INSTITUTION NAME ]", // Editable placeholder
    location: "India",
    startYear: "2024",
    expectedGraduation: "2028", // Editable placeholder
    coursework: [
      "Digital Signal Processing (DSP)",
      "Signals & Systems",
      "Microcontrollers & Embedded Systems",
      "Analog & Digital Electronics",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python)",
      "Communication Systems & Modulation",
      "Computer Networks"
    ]
  };

  return (
    <section id="education" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-tag">EDUCATION</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
            ACADEMIC FOUNDATION.
          </h2>
        </div>

        {/* Education Card */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          
          {/* Background Big Typography Accent */}
          <div className="absolute right-6 bottom-4 text-8xl sm:text-9xl font-black text-[var(--text-primary)] opacity-[0.03] pointer-events-none select-none">
            {EDUCATION_DATA.departmentAbbr}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Degree & Department Header */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border-color)] text-xs mono text-amber-400 font-bold uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>UNDERGRADUATE DEGREE</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-tight">
                {EDUCATION_DATA.department}
              </h3>

              <p className="mono text-sm text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
                {EDUCATION_DATA.degree}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-[var(--text-secondary)] border-t border-[var(--border-color)]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[var(--text-primary)]" />
                  <span>{EDUCATION_DATA.institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[var(--text-primary)]" />
                  <span>{EDUCATION_DATA.startYear} - {EDUCATION_DATA.expectedGraduation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--text-primary)]" />
                  <span>{EDUCATION_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Coursework Tags */}
            <div className="lg:col-span-5 space-y-4">
              <span className="mono text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase block">
                // RELEVANT COURSEWORK
              </span>
              <div className="flex flex-wrap gap-2">
                {EDUCATION_DATA.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-lg bg-[var(--badge-bg)] border border-[var(--border-color)] text-xs mono text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
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
