import React from 'react';
import Home from './pages/Home';
import GlowCursor from './components/common/GlowCursor';
import DarkVeil from './components/common/DarkVeil';
import SmoothScroll from './components/common/SmoothScroll';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="relative min-h-screen bg-[#07090E] text-white selection:bg-[#8B5CF6]/30 selection:text-[#8B5CF6]">
      {/* Ambient Background DarkVeil Shader */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75">
        <DarkVeil
          speed={0.35}
          noiseIntensity={0.02}
          warpAmount={0.2}
          resolutionScale={1}
        />
      </div>

      {/* Fluid Interactive WebGL Glow Cursor */}
      <GlowCursor
        color="#8B5CF6"
        secondaryColor="#38BDF8"
        trailLength={38}
        trailWidth={8}
        trailTaper={0.75}
        followSpeed={0.2}
        glowIntensity={1.8}
        glowSpread={1.2}
        hotspot={0.6}
        brightness={1.3}
        opacity={1}
        pulseSpeed={1.0}
        noiseStrength={0.02}
        idleFade={true}
        idleTimeout={2000}
        fadeDuration={400}
        blendMode="screen"
      >
        <div className="relative z-10">
          <Home />
        </div>
      </GlowCursor>
    </div>
    </SmoothScroll>
    </LanguageProvider>
  );
}
