import React from 'react';
import { SKILLS_CATEGORIES } from '../data/skillsData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-tag">02 / SKILLS</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
            THE TOOLSET.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-3 max-w-2xl">
            A comprehensive overview of core technologies across software engineering, data structures, machine learning, embedded systems, and electronics.
          </p>
        </div>

        {/* Typographic Category Layout */}
        <div className="space-y-12">
          {SKILLS_CATEGORIES.map((cat) => (
            <div
              key={cat.number}
              className="p-8 rounded-2xl glass-card relative group transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Category Title & Number */}
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="mono text-sm font-bold text-[var(--text-secondary)] tracking-widest">
                    CATEGORY {cat.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Badges Pill Grid */}
                <div className="lg:col-span-8 flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-[var(--badge-bg)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-medium tracking-wide mono hover:border-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-all duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
