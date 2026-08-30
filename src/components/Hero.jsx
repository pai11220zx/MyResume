import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';
import DepthText from './common/DepthText';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Intro Greeting (Plain text, no fade in) */}
        <div className="text-base sm:text-lg font-semibold text-secondary-readable mb-4 tracking-wide uppercase">
          Hello, I'm
        </div>

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

        {/* Subtitle / Role & Affiliation (Plain text, no fade in) */}
        <div className="max-w-5xl mx-auto mb-4 flex flex-col items-center">
          <h2 className="text-lg sm:text-2xl font-bold text-title-readable leading-relaxed text-center">
            {profileData.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-secondary-readable font-medium text-center whitespace-normal sm:whitespace-nowrap">
            สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏเพชรบุรี (PBRU) | มุ่งเน้นงานด้าน Automation & Software Development
          </p>
        </div>

        {/* Short Bio / Motto (Plain text, no fade in) */}
        <div className="max-w-2xl mx-auto mb-8 flex justify-center">
          <p className="text-sm sm:text-base text-secondary-readable font-medium text-center">
            {profileData.shortBio}
          </p>
        </div>

        {/* Social & Contact Direct Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3 text-[#E2E8F0]"
        >
          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#171A21]/70 border border-[#272A33] hover:border-[#8B5CF6]/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shadow-md"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profileData.socialLinks.email}
            className="p-3 rounded-xl bg-[#171A21]/70 border border-[#272A33] hover:border-[#8B5CF6]/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shadow-md"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={profileData.socialLinks.phone}
            className="p-3 rounded-xl bg-[#171A21]/70 border border-[#272A33] hover:border-[#8B5CF6]/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shadow-md"
            aria-label="Call Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
