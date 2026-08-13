import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SignalsToSystems from './components/SignalsToSystems';
import Journey from './components/Journey';
import Education from './components/Education';
import Certifications from './components/Certifications';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-white selection:text-black">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections Trajectory */}
      <main>
        {/* HERO */}
        <Hero />

        {/* 01 / ABOUT */}
        <About />

        {/* 02 / SKILLS */}
        <Skills />

        {/* 03 / WORK (PROJECTS) */}
        <Projects />

        {/* FROM SIGNALS TO SYSTEMS */}
        <SignalsToSystems />

        {/* 04 / JOURNEY */}
        <Journey />

        {/* EDUCATION */}
        <Education />

        {/* CERTIFICATIONS */}
        <Certifications />

        {/* GITHUB ACTIVITY */}
        <GitHubActivity />

        {/* 05 / CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
