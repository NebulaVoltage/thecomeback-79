import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 md:py-32 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Eyebrow */}
        <div className="section-tag">
          06 // GITHUB & CODE
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#FAFAFA] mb-12">
          OPEN SOURCE & REPOSITORIES.
        </h2>

        {/* GitHub Card */}
        <div className="clean-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-xl bg-white/5 border border-white/12 text-white shrink-0">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div className="mono text-xs text-white/50 mb-1 uppercase tracking-wider">
                  @NebulaVoltage
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#FAFAFA] mb-2">
                  Shreehith Sai Vodapally on GitHub
                </h3>
                <p className="text-sm text-[#a7a6a6] max-w-xl leading-relaxed">
                  Explore open source implementations of data structures, graph pathfinding algorithms, Java mission control systems, and embedded signal simulators.
                </p>
              </div>
            </div>

            <a
              href="https://github.com/NebulaVoltage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shrink-0"
            >
              <span>VIEW GITHUB PROFILE</span>
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
