import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Download, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Configurable endpoint support via VITE_CONTACT_FORM_ENDPOINT
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Submission failed');
      } else {
        // Deployment-ready simulation for static preview
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error("Contact Form error:", err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-tag">05 / CONTACT</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] mb-4">
            LET'S BUILD SOMETHING INTERESTING.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl">
            Open to interesting engineering problems, collaborative projects, and opportunities to build at the intersection of hardware and software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Resume Download Card */}
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <span className="mono text-xs text-[var(--text-secondary)] uppercase tracking-widest block">
                // RESUME & CREDENTIALS
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] uppercase">
                ENGINEERING PROFILE
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Download verified resume detailing technical projects, ECE coursework, and software skills.
              </p>
              <a
                href="/resume.pdf"
                download="Shreehith_Vodapally_Resume.pdf"
                data-cursor="OPEN"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-extrabold tracking-widest uppercase hover:opacity-90 transition-all shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Social Direct Links */}
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <span className="mono text-xs text-[var(--text-secondary)] uppercase tracking-widest block">
                // DIRECT CONNECT
              </span>

              {/* GitHub */}
              <a
                href="https://github.com/NebulaVoltage"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN"
                className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-color)] hover:border-[var(--text-primary)] bg-[var(--badge-bg)] text-[var(--text-primary)] group transition-all"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5" />
                  <div>
                    <div className="font-bold text-sm">GitHub</div>
                    <div className="mono text-xs text-[var(--text-secondary)]">@NebulaVoltage</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shreehith-vodapally-68796b378/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN"
                className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-color)] hover:border-[var(--text-primary)] bg-[var(--badge-bg)] text-[var(--text-primary)] group transition-all"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="font-bold text-sm">LinkedIn</div>
                    <div className="mono text-xs text-[var(--text-secondary)]">Shreehith Vodapally</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

          </div>

          {/* Right Column: Working Contact Form UI */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-2xl relative">
              
              <h3 className="text-xl font-bold text-[var(--text-primary)] uppercase mb-6">
                SEND A DIRECT MESSAGE
              </h3>

              {status === 'success' ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-lg text-emerald-300">MESSAGE TRANSMITTED</h4>
                  <p className="text-xs text-neutral-300">
                    Thank you for reaching out. Your message has been recorded successfully.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 rounded-full border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase mono hover:bg-emerald-500/20 transition-all cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name-input" className="mono text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider block mb-2">
                      NAME <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border ${
                        errors.name ? 'border-red-500' : 'border-[var(--border-color)]'
                      } text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--text-primary)] focus:outline-none transition-colors text-sm`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email-input" className="mono text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider block mb-2">
                      EMAIL <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border ${
                        errors.email ? 'border-red-500' : 'border-[var(--border-color)]'
                      } text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--text-primary)] focus:outline-none transition-colors text-sm`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message-input" className="mono text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider block mb-2">
                      MESSAGE <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message-input"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your engineering inquiry or project idea..."
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border ${
                        errors.message ? 'border-red-500' : 'border-[var(--border-color)]'
                      } text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--text-primary)] focus:outline-none transition-colors text-sm resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>An error occurred while sending. Please try again.</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-full bg-[var(--accent-cta-bg)] text-[var(--accent-cta-text)] font-extrabold text-xs tracking-widest uppercase hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
