import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Eyebrow */}
        <div className="section-tag">
          07 // CONTACT
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#FAFAFA] mb-12">
          LET'S BUILD SOMETHING INTERESTING.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <p className="text-base md:text-lg text-[#a7a6a6] leading-relaxed mb-8">
                I'm open to discussions on hardware-software engineering, embedded systems development, algorithms, and technical collaborations.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/NebulaVoltage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clean-card p-4 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span className="font-semibold text-sm text-[#FAFAFA]">GitHub</span>
                  </div>
                  <span className="mono text-xs text-[#a7a6a6] group-hover:text-white transition-colors">
                    github.com/NebulaVoltage
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shreehith-vodapally-68796b378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clean-card p-4 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="font-semibold text-sm text-[#FAFAFA]">LinkedIn</span>
                  </div>
                  <span className="mono text-xs text-[#a7a6a6] group-hover:text-white transition-colors">
                    linkedin.com/in/shreehith-vodapally
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="clean-card p-8 md:p-10">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-2 uppercase">
                    Message Delivered
                  </h3>
                  <p className="text-sm text-[#a7a6a6] max-w-md mb-6">
                    Thank you for reaching out. Your message has been received cleanly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="mono text-xs font-semibold text-white/70 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.name ? 'border-red-500' : 'border-white/12 focus:border-white'
                      } text-sm text-[#FAFAFA] placeholder:text-white/30 focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="mono text-xs font-semibold text-white/70 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? 'border-red-500' : 'border-white/12 focus:border-white'
                      } text-sm text-[#FAFAFA] placeholder:text-white/30 focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="mono text-xs font-semibold text-white/70 uppercase">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we collaborate?"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? 'border-red-500' : 'border-white/12 focus:border-white'
                      } text-sm text-[#FAFAFA] placeholder:text-white/30 focus:outline-none transition-colors resize-y`}
                    />
                    {errors.message && (
                      <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl mt-2"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
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
