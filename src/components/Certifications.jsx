import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  // Easily add certification objects here in the future:
  // { title: '...', issuer: '...', date: '...', url: '...' }
  const CERTIFICATIONS = [];

  return (
    <section id="certifications" className="py-24 md:py-32 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Eyebrow */}
        <div className="section-tag">
          05 // CERTIFICATIONS
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#FAFAFA] mb-12">
          CERTIFICATIONS.
        </h2>

        {/* Content */}
        {CERTIFICATIONS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="clean-card p-6 flex items-start gap-4">
                <Award className="w-6 h-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#FAFAFA]">{cert.title}</h3>
                  <p className="text-sm text-[#a7a6a6]">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="clean-card p-8 md:p-12 text-center flex flex-col items-center justify-center">
            <Award className="w-8 h-8 text-white/30 mb-4" />
            <p className="mono text-sm text-[#a7a6a6] uppercase tracking-wider mb-2">
              No certifications added yet.
            </p>
            <p className="text-xs text-white/40 max-w-md">
              Industry certifications and specialized technical credentials will be listed here as completed.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
