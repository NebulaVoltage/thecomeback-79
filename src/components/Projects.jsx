import React, { useState } from 'react';
import { PROJECTS_DATA, FILTER_CATEGORIES } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Filter, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    return proj.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="section-tag">03 / WORK</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
              SELECTED WORK.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
            Engineered systems demonstrating data structures, embedded logic, signal processing algorithms, and web applications.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 border-b border-[var(--border-color)] scrollbar-none">
          <div className="flex items-center gap-2 pr-4 border-r border-[var(--border-color)] text-[var(--text-secondary)] shrink-0">
            <Filter className="w-4 h-4" />
            <span className="mono text-xs uppercase tracking-widest font-bold">FILTER:</span>
          </div>

          <div className="flex items-center gap-2 flex-nowrap shrink-0">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider mono uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-lg'
                    : 'bg-[var(--badge-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="VIEW"
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Top Card Metadata Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-color)]">
                  <span className="mono text-xs font-bold tracking-widest text-[var(--text-secondary)]">
                    PROJECT {project.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border-color)] mono text-[10px] tracking-wider text-[var(--text-secondary)] uppercase">
                    {project.primaryCategory}
                  </span>
                </div>

                {/* Generative Tech Preview Motif SVG */}
                <div className="w-full h-36 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-6 flex items-center justify-center relative overflow-hidden p-4 group-hover:border-[var(--border-color-hover)] transition-colors">
                  {project.id === 'smart-warehouse-navigation' && (
                    <svg className="w-full h-full text-emerald-400/70" viewBox="0 0 240 100" fill="none">
                      <line x1="20" y1="20" x2="220" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="20" y1="50" x2="220" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="20" y1="80" x2="220" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                      <circle cx="30" cy="50" r="6" fill="#10B981" />
                      <path d="M30 50 L90 20 L150 80 L210 50" stroke="#10B981" strokeWidth="2.5" fill="none" />
                      <circle cx="90" cy="20" r="4" fill="#34D399" />
                      <circle cx="150" cy="80" r="4" fill="#34D399" />
                      <circle cx="210" cy="50" r="6" fill="#6EE7B7" className="animate-ping" />
                    </svg>
                  )}
                  {project.id === 'space-mission-control' && (
                    <svg className="w-full h-full text-cyan-400/70" viewBox="0 0 240 100" fill="none">
                      <rect x="20" y="15" width="200" height="20" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
                      <rect x="40" y="40" width="160" height="20" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
                      <rect x="60" y="65" width="120" height="20" rx="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
                      <text x="120" y="78" textAnchor="middle" fill="#22D3EE" fontSize="10" fontFamily="JetBrains Mono">TOP STACK [LIFO]</text>
                    </svg>
                  )}
                  {project.id === 'sampling-aliasing-simulator' && (
                    <svg className="w-full h-full text-amber-400/70" viewBox="0 0 240 100" fill="none">
                      <path d="M10 50 Q 35 10, 60 50 T 110 50 T 160 50 T 210 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <line x1="35" y1="10" x2="35" y2="50" stroke="#FBBF24" strokeWidth="2" />
                      <line x1="85" y1="90" x2="85" y2="50" stroke="#FBBF24" strokeWidth="2" />
                      <line x1="135" y1="10" x2="135" y2="50" stroke="#FBBF24" strokeWidth="2" />
                      <line x1="185" y1="90" x2="185" y2="50" stroke="#FBBF24" strokeWidth="2" />
                    </svg>
                  )}
                  {project.id === 'arduino-embedded-systems-hub' && (
                    <svg className="w-full h-full text-violet-400/70" viewBox="0 0 240 100" fill="none">
                      <rect x="50" y="20" width="140" height="60" rx="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
                      <circle cx="80" cy="50" r="10" fill="#8B5CF6" />
                      <circle cx="120" cy="50" r="10" fill="#A78BFA" />
                      <circle cx="160" cy="50" r="10" fill="#C4B5FD" />
                      <path d="M30 50 L50 50 M190 50 L210 50" stroke="#A78BFA" strokeWidth="3" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-amber-400 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[var(--badge-bg)] border border-[var(--border-color)] mono text-[10px] text-[var(--text-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded bg-[var(--badge-bg)] border border-[var(--border-color)] mono text-[10px] text-[var(--text-secondary)]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links & Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                  <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-all flex items-center justify-center"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 mono text-xs font-bold tracking-wider text-[var(--text-primary)] group-hover:translate-x-1 transition-transform"
                  >
                    <span>{project.demo}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
