import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  const CERTIFICATIONS = [];

  return (
    <section id="certifications" className="py-28 md:py-36 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Section Eyebrow */}
        <div className="section-tag">
          05 // CERTIFICATIONS
        </div>

        {/* Editorial Heading */}
        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight text-[#FAFAFA] mb-16 font-[Manrope]">
          CERTIFICATIONS.
        </h2>

        {/* Content */}
        {CERTIFICATIONS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="editorial-card p-6 flex items-start gap-4">
                <Award className="w-6 h-6 text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FAFAFA] font-[Manrope]">{cert.title}</h3>
                  <p className="text-sm text-white/60">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="editorial-card p-8 md:p-12 text-center flex flex-col items-center justify-center">
            <Award className="w-8 h-8 text-white/30 mb-4" />
            <p className="mono text-xs text-white/50 uppercase tracking-widest mb-2">
              No certifications added yet.
            </p>
            <p className="text-xs text-white/40 max-w-md">
              Industry credentials and specialized technical certifications will be listed here as completed.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
