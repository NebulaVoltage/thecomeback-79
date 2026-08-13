import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[var(--border-color)]">
          
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight">
              SHREEHITH SAI VODAPALLY
            </h3>
            <p className="mono text-xs text-[var(--text-secondary)] tracking-wider mt-1 uppercase">
              ELECTRONICS & COMMUNICATION ENGINEERING
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/NebulaVoltage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[var(--border-color)] hover:border-[var(--text-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shreehith-vodapally-68796b378/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[var(--border-color)] hover:border-[var(--text-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-[var(--border-color)] hover:border-[var(--text-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer flex items-center justify-center"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs mono text-[var(--text-secondary)]">
          <p>&copy; 2026 SHREEHITH SAI VODAPALLY. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest font-bold text-[var(--text-primary)] uppercase">
            BUILT WITH PRECISION.
          </p>
        </div>
      </div>
    </footer>
  );
}
