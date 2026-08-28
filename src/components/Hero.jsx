import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';
import DepthText from './common/DepthText';
import BlurText from './common/BlurText';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="glow-orb-purple" />
      <div className="glow-orb-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Intro Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-base sm:text-lg font-medium text-[#A1A1AA] mb-4 tracking-wide uppercase"
        >
          Hello, I'm
        </motion.div>

        {/* 3D DepthText Name */}
        <div className="mb-6 flex justify-center py-2">
          <DepthText
            text={profileData.name}
            layers={32}
            depth={2.2}
            faceColor="#FFFFFF"
            depthColor="#7C3AED"
            tilt={8}
            pointerTracking
            smoothing={0.14}
            perspective={950}
            autoOrbit
            orbitSpeed={0.3}
            fontSize="clamp(2.2rem, 6.5vw, 5.2rem)"
            fontWeight={900}
            shadow
          />
        </div>

        {/* Subtitle / Role with BlurText */}
        <div className="max-w-3xl mx-auto mb-6 flex justify-center">
          <BlurText
            text={profileData.title}
            delay={90}
            animateBy="words"
            direction="top"
            className="text-lg sm:text-2xl font-medium text-[#A1A1AA] leading-relaxed text-center justify-center"
          />
        </div>

        {/* Short Bio / Motto with BlurText */}
        <div className="max-w-2xl mx-auto mb-10 flex justify-center">
          <BlurText
            text={profileData.shortBio}
            delay={70}
            animateBy="words"
            direction="bottom"
            className="text-sm sm:text-base text-[#A1A1AA]/80 text-center justify-center font-medium"
          />
        </div>

        {/* Social & Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4 text-[#A1A1AA]"
        >
          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#171A21]/60 border border-[#272A33]/80 hover:border-[#8B5CF6]/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profileData.socialLinks.email}
            className="p-3 rounded-xl bg-[#171A21]/60 border border-[#272A33]/80 hover:border-[#8B5CF6]/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={profileData.socialLinks.phone}
            className="p-3 rounded-xl bg-[#171A21]/60 border border-[#272A33]/80 hover:border-[#8B5CF6]/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label="Call Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
