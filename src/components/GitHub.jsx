import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Star, GitFork, Loader2, AlertCircle } from 'lucide-react';

const FALLBACK_REPOS = [
  {
    id: 1,
    name: 'thecomeback-79',
    description: 'Cinematic engineering portfolio featuring embedded systems, DSP visualizers, and algorithms.',
    language: 'JavaScript',
    stargazers_count: 5,
    forks_count: 2,
    html_url: 'https://github.com/NebulaVoltage/thecomeback-79',
  },
  {
    id: 2,
    name: 'smart-warehouse-navigation',
    description: 'Data-structures-and-algorithms-driven warehouse pathfinding simulation using Dijkstra & A*.',
    language: 'React',
    stargazers_count: 8,
    forks_count: 3,
    html_url: 'https://github.com/NebulaVoltage',
  },
  {
    id: 3,
    name: 'sampling-aliasing-simulator',
    description: 'Interactive signal processing simulator exploring sampling rates and Nyquist aliasing.',
    language: 'JavaScript',
    stargazers_count: 6,
    forks_count: 1,
    html_url: 'https://github.com/NebulaVoltage',
  },
];

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch('https://api.github.com/users/NebulaVoltage/repos?sort=updated&per_page=6');
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          } else {
            setRepos(FALLBACK_REPOS);
          }
          setLoading(false);
        }
      } catch (err) {
        console.warn('GitHub API request failed, using fallback data:', err);
        if (isMounted) {
          setError(true);
          setRepos(FALLBACK_REPOS);
          setLoading(false);
        }
      }
    };

    fetchRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-28 md:py-36 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Section Eyebrow */}
        <div className="section-tag">
          06 // GITHUB & OPEN SOURCE
        </div>

        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight text-[#FAFAFA] font-[Manrope] mb-2">
              OPEN SOURCE REPOSITORIES.
            </h2>
            <p className="text-sm text-white/60 mono uppercase tracking-wider">
              @NebulaVoltage &bull; Live GitHub Activity
            </p>
          </div>

          <a
            href="https://github.com/NebulaVoltage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 h-[40px] rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shrink-0"
          >
            <span>VISIT GITHUB PROFILE</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="py-16 text-center flex flex-col items-center justify-center">
            <Loader2 className="w-8 h-8 text-white/40 animate-spin mb-4" />
            <p className="mono text-xs text-white/50 uppercase tracking-widest">
              Fetching public repositories...
            </p>
          </div>
        )}

        {/* Error Notice (Non-blocking) */}
        {!loading && error && (
          <div className="mb-8 p-4 rounded-lg bg-white/5 border border-white/12 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs mono text-white/60">
              <AlertCircle className="w-4 h-4 text-white/70 shrink-0" />
              <span>GitHub API rate-limited or offline. Showing cached repository overview.</span>
            </div>
          </div>
        )}

        {/* Repositories Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-card p-6 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="mono text-xs text-white/50 tracking-wider flex items-center gap-2">
                      <svg className="w-4 h-4 fill-current text-white/70" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>REPO</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2 font-[Manrope] group-hover:text-white transition-colors">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-white/60 line-clamp-3 leading-relaxed mb-6">
                    {repo.description || 'Public repository by @NebulaVoltage.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/12 text-xs mono text-white/50">
                  <span>{repo.language || 'Code'}</span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-white/60" />
                      {repo.stargazers_count || 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-white/60" />
                      {repo.forks_count || 0}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
