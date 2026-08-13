import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const { details } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-rise"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-card bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-10 text-[var(--text-primary)] shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Details"
          className="absolute top-6 right-6 p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-3 mb-4">
          <span className="mono text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase">
            PROJECT {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
          <span className="mono text-xs text-[var(--text-secondary)] uppercase">
            {project.primaryCategory}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] mb-6">
          {project.title}
        </h2>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[var(--border-color)]">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded bg-[var(--badge-bg)] border border-[var(--border-color)] mono text-xs text-[var(--text-primary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Modal Body Sections */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          
          {/* PROBLEM */}
          <div>
            <h3 className="mono text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-2">
              // PROBLEM STATEMENT
            </h3>
            <p className="text-[var(--text-secondary)]">
              {details.problem}
            </p>
          </div>

          {/* APPROACH */}
          <div>
            <h3 className="mono text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-2">
              // ENGINEERING APPROACH
            </h3>
            <p className="text-[var(--text-secondary)]">
              {details.approach}
            </p>
          </div>

          {/* KEY CONCEPTS */}
          <div>
            <h3 className="mono text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-2">
              // KEY CONCEPTS & ALGORITHMS
            </h3>
            <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)] text-xs mono text-[var(--text-primary)]">
              {details.keyConcepts}
            </div>
          </div>

          {/* RESULT */}
          <div>
            <h3 className="mono text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-2">
              // RESULTS & PERFORMANCE
            </h3>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{details.result}</span>
            </div>
          </div>

        </div>

        {/* Footer Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-[var(--border-color)]">
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-color)] hover:border-[var(--text-primary)] bg-[var(--bg-card)] text-xs font-bold tracking-wider uppercase mono text-[var(--text-primary)] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB REPO</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[var(--accent-cta-bg)] text-[var(--accent-cta-text)] text-xs font-extrabold tracking-widest uppercase hover:opacity-90 transition-all cursor-pointer"
          >
            CLOSE WINDOW
          </button>
        </div>
      </div>
    </div>
  );
}
