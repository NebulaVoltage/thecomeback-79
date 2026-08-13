import React from 'react';
import { Award, Clock } from 'lucide-react';

export default function Certifications() {
  // Configurable Certifications List Array (Empty by default for authenticity)
  const CERTIFICATIONS_LIST = [
    // Future verified certifications can be added cleanly here:
    // {
    //   title: "Professional Certificate Title",
    //   issuer: "Issuing Organization",
    //   date: "2026",
    //   credentialId: "XYZ-12345",
    //   link: "https://credential-link.com"
    // }
  ];

  return (
    <section id="certifications" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="section-tag">CERTIFICATIONS</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
            CERTIFICATIONS.
          </h2>
        </div>

        {CERTIFICATIONS_LIST.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS_LIST.map((cert, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex items-start gap-4">
                <Award className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-base text-[var(--text-primary)]">{cert.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{cert.issuer} &bull; {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Elegant Empty-State Placeholder (No fabricated data) */
          <div className="glass-card p-10 rounded-2xl text-center flex flex-col items-center justify-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-[var(--badge-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="mono font-bold text-lg text-[var(--text-primary)] uppercase tracking-wider">
                CERTIFICATIONS
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                Coming soon. Technical certifications currently in progress and will be posted upon verification.
              </p>
            </div>
            <span className="mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest px-3 py-1 rounded bg-[var(--badge-bg)] border border-[var(--border-color)]">
              STATUS: PREPARING VERIFICATIONS
            </span>
          </div>
        )}

      </div>
    </section>
  );
}
