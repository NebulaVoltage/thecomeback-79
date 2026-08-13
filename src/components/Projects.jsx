import React from 'react';

export default function Projects() {
  const PROJECTS_DATA = [
    {
      id: 'PROJECT 01',
      title: 'Smart Warehouse Automation & Robot Navigation',
      description:
        'A data-structures-and-algorithms-driven warehouse navigation system using graph-based pathfinding and visualization.',
      technologies: ['Dijkstra', 'A*', 'Graphs', 'React', 'JavaScript', 'DSA'],
      github: 'https://github.com/NebulaVoltage',
    },
    {
      id: 'PROJECT 02',
      title: 'Space Mission Control System',
      description:
        'A Java-based mission control system demonstrating linked lists, stack-based emergency handling, and mission-state management.',
      technologies: ['Java', 'Linked Lists', 'Stacks', 'DSA'],
      github: 'https://github.com/NebulaVoltage',
    },
    {
      id: 'PROJECT 03',
      title: 'Sampling Theorem & Aliasing Simulator',
      description:
        'An interactive signal-processing project demonstrating sampling, reconstruction, and aliasing behavior.',
      technologies: ['DSP', 'Sampling', 'Aliasing', 'JavaScript'],
      github: 'https://github.com/NebulaVoltage',
    },
    {
      id: 'PROJECT 04',
      title: 'Arduino / Embedded Systems',
      description:
        'Arduino and electronics projects exploring sensors, embedded systems, signal processing, and hardware-software interaction.',
      technologies: ['Arduino', 'C/C++', 'Embedded Systems', 'Sensors', 'Hardware'],
      github: 'https://github.com/NebulaVoltage',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Eyebrow */}
        <div className="section-tag">
          03 // FEATURED PROJECTS
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#FAFAFA] mb-12">
          ENGINEERING PROJECTS.
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="clean-card p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="mono text-xs text-white/50 tracking-widest uppercase">
                    {project.id}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-white/12 text-white/70 hover:text-white hover:border-white transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                <h3 className="text-xl font-bold text-[#FAFAFA] mb-3 leading-snug group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#a7a6a6] mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/12">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] mono text-neutral-300"
                    >
                      {tech}
                    </span>
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
