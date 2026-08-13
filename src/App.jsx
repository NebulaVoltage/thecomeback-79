import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import GitHubSection from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* CinematicHero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Education */}
        <Education />

        {/* Certifications */}
        <Certifications />

        {/* GitHub */}
        <GitHubSection />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
