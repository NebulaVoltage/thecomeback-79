import React, { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function GitHubActivity() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Check sessionStorage cache first to minimize redundant API calls
        const cached = sessionStorage.getItem('github_repos_NebulaVoltage');
        if (cached) {
          const parsed = JSON.parse(cached);
          setRepos(parsed);
          setLoading(false);
          return;
        }

        const res = await fetch('https://api.github.com/users/NebulaVoltage/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error('Failed to fetch repos');
        const data = await res.json();
        
        // Filter out forks if preferred and sort by updated date
        const sorted = data
          .filter(r => !r.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);

        setRepos(sorted.length > 0 ? sorted : data.slice(0, 6));
        sessionStorage.setItem('github_repos_NebulaVoltage', JSON.stringify(data.slice(0, 6)));
      } catch (err) {
        console.warn("GitHub API notice:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="section-tag">LIVE API INTEGRATION</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
              GITHUB ACTIVITY.
            </h2>
          </div>

          <a
            href="https://github.com/NebulaVoltage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-color)] hover:border-[var(--text-primary)] bg-[var(--bg-card)] text-xs font-bold tracking-wider uppercase mono text-[var(--text-primary)] transition-all shrink-0 w-fit"
          >
            <GithubIcon className="w-4 h-4" />
            <span>@NebulaVoltage</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-6 rounded-2xl animate-pulse h-48 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-4 bg-[var(--border-color)] rounded w-3/4" />
                  <div className="h-3 bg-[var(--border-color)] rounded w-full" />
                  <div className="h-3 bg-[var(--border-color)] rounded w-2/3" />
                </div>
                <div className="h-4 bg-[var(--border-color)] rounded w-1/3" />
              </div>
            ))}
          </div>
        )}

        {/* Error / Fallback State */}
        {error && !loading && (
          <div className="glass-card p-8 rounded-2xl text-center space-y-4 max-w-xl mx-auto">
            <GithubIcon className="w-8 h-8 mx-auto text-[var(--text-secondary)]" />
            <p className="text-sm text-[var(--text-secondary)]">
              Unable to load live GitHub activity right now. Explore repositories directly on GitHub.
            </p>
            <a
              href="https://github.com/NebulaVoltage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--accent-cta-bg)] text-[var(--accent-cta-text)] font-bold text-xs uppercase"
            >
              VISIT GITHUB PROFILE
            </a>
          </div>
        )}

        {/* Repos Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN"
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--text-primary)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Code2 className="w-5 h-5 text-amber-400" />
                    <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
                  </div>

                  <h3 className="font-bold text-base text-[var(--text-primary)] group-hover:text-amber-400 transition-colors mono truncate mb-2">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-6">
                    {repo.description || 'Public repository by Shreehith Sai Vodapally.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] text-xs mono text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">
                    {repo.language || 'Code'}
                  </span>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
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
