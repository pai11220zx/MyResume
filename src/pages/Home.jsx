import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Activities from '../components/Activities';
import Education from '../components/Education';
import GitHubActivity from '../components/GitHubActivity';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white selection:bg-[#8B5CF6]/30 selection:text-[#8B5CF6]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Activities />
        <Education />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
