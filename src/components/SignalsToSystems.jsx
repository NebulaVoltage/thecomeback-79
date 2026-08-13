import React, { useState } from 'react';
import { Activity, Cpu, Binary, GitMerge, Server } from 'lucide-react';

export default function SignalsToSystems() {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      id: "SIGNAL",
      num: "01",
      icon: Activity,
      title: "SIGNAL ACQUISITION",
      subtitle: "Electronics & Physical Sensors",
      desc: "Continuous physical phenomena (voltage, acoustics, electro-magnetic waves) digitized via analog-to-digital converters (ADC)."
    },
    {
      id: "PROCESS",
      num: "02",
      icon: Cpu,
      title: "SIGNAL PROCESSING",
      subtitle: "DSP & Sampling Theory",
      desc: "Filtering noise, Fourier transformation, Nyquist sampling compliance, and time-domain signal conditioning."
    },
    {
      id: "COMPUTE",
      num: "03",
      icon: Binary,
      title: "COMPUTATION ENGINE",
      subtitle: "Data Structures & Low-Level Code",
      desc: "Structuring telemetry with trees, graphs, heaps, stacks, and deterministic microsecond algorithms."
    },
    {
      id: "DECIDE",
      num: "04",
      icon: GitMerge,
      title: "INTELLIGENT DECISION",
      subtitle: "AI / Machine Learning",
      desc: "Applying gradient descent, classification vectors, and search heuristics for path optimization."
    },
    {
      id: "SYSTEM",
      num: "05",
      icon: Server,
      title: "SYSTEM INTEGRATION",
      subtitle: "Software Engineering & Web Apps",
      desc: "Deploying reactive user interfaces, API infrastructure, and real-time distributed platforms."
    }
  ];

  return (
    <section className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="container-custom">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="section-tag justify-center">ENGINEERING IDENTITY</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] mb-4">
            FROM SIGNALS TO SYSTEMS.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            How physical hardware signals evolve into intelligent full-stack software systems.
          </p>
        </div>

        {/* Step Sequence Horizontal / Stacked Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl glass-card transition-all duration-300 cursor-pointer flex flex-col justify-between relative ${
                  isSelected
                    ? 'border-[var(--text-primary)] bg-[var(--bg-card-hover)] shadow-2xl scale-[1.02]'
                    : 'border-[var(--border-color)] hover:border-[var(--border-color-hover)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="mono text-xs font-bold text-[var(--text-secondary)]">
                      {step.num}
                    </span>
                    <IconComponent className={`w-5 h-5 ${isSelected ? 'text-amber-400' : 'text-[var(--text-secondary)]'}`} />
                  </div>

                  <h3 className="mono font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider mb-1">
                    {step.id}
                  </h3>
                  <p className="text-[11px] mono text-[var(--text-secondary)] mb-4">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2 pt-3 border-t border-[var(--border-color)]">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Animated Connecting Signal Pulse Vector */}
        <div className="mt-12 p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] flex items-center justify-between">
          <div className="mono text-xs text-[var(--text-secondary)] tracking-widest uppercase">
            // LIVE BUS TRANSMISSION PATH
          </div>
          <div className="mono text-xs text-[var(--text-primary)] font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>ACTIVE FREQUENCY: 44.1 kHz</span>
          </div>
        </div>

      </div>
    </section>
  );
}
