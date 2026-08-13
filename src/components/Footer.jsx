import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#050505] border-t border-white/12 text-white/60">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <h4 className="font-semibold text-sm text-[#FAFAFA] uppercase tracking-wider font-[Manrope]">
            SHREEHITH SAI VODAPALLY
          </h4>
          <p className="mono text-xs text-white/40 uppercase tracking-widest">
            ELECTRONICS & COMMUNICATION ENGINEERING
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/NebulaVoltage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs mono text-white/60 hover:text-white transition-colors uppercase tracking-wider"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/shreehith-vodapally-68796b378/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs mono text-white/60 hover:text-white transition-colors uppercase tracking-wider"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mono text-xs text-white/40 tracking-widest">
          &copy; 2026
        </div>

      </div>
    </footer>
  );
}
