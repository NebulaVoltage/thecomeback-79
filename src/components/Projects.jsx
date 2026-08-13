import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const PROJECTS_DATA = [
    {
      number: '01',
      title: 'Smart Warehouse Automation & Robot Navigation',
      description:
        'A data-structures-and-algorithms-driven warehouse navigation system using graph-based pathfinding and real-time visual traversal.',
      technologies: ['Dijkstra', 'A*', 'Graphs', 'React', 'JavaScript', 'DSA'],
      github: 'https://github.com/NebulaVoltage',
    },
    {
      number: '02',
      title: 'Space Mission Control System',
      description:
        'A Java-based mission control system demonstrating linked lists, stack-based emergency handling, and mission-state management.',
      technologies: ['Java', 'Linked Lists', 'Stacks', 'DSA'],
      github: 'https://github.com/NebulaVoltage',
    },
    {
      number: '03',
      title: 'Sampling Theorem & Aliasing Simulator',
      description:
        'An interactive signal-processing project demonstrating sampling rates, reconstruction filtering, and Nyquist-Shannon aliasing behavior.',
      technologies: ['DSP', 'Sampling', 'Aliasing', 'JavaScript'],
      github: 'https://github.com/NebulaVoltage',
    },
    {
      number: '04',
      title: 'Arduino / Embedded Systems Projects',
      description:
        'Arduino and electronics projects exploring hardware sensors, embedded microcontroller programming, signal processing, and physical systems.',
      technologies: ['Arduino', 'C/C++', 'Embedded Systems', 'Sensors', 'Hardware'],
      github: 'https://github.com/NebulaVoltage',
    },
  ];

  return (
    <section id="projects" className="py-28 md:py-36 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Section Eyebrow */}
        <div className="section-tag">
          03 // FEATURED PROJECTS
        </div>

        {/* Editorial Heading */}
        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight text-[#FAFAFA] mb-16 font-[Manrope]">
          ENGINEERING PROJECTS.
        </h2>

        {/* Editorial Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project) => (
            <a
              key={project.number}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card p-8 md:p-10 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Header Number & Arrow */}
                <div className="flex items-center justify-between mb-6 border-b border-white/12 pb-4">
                  <span className="mono text-xs text-white/40 tracking-widest uppercase">
                    PROJECT // {project.number}
                  </span>
                  <div className="p-2 rounded-full border border-white/12 text-white/50 group-hover:text-white group-hover:border-white transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-4 leading-snug font-[Manrope] group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/65 font-normal mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-white/12">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="mono text-[11px] text-white/50 group-hover:text-white/70 transition-colors uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
