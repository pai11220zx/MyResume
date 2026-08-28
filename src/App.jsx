import React from 'react';
import Home from './pages/Home';
import GlowCursor from './components/common/GlowCursor';

export default function App() {
  return (
    <GlowCursor
      color="#8B5CF6"
      secondaryColor="#38BDF8"
      trailLength={35}
      trailWidth={7}
      trailTaper={0.8}
      followSpeed={0.16}
      glowIntensity={1.8}
      glowSpread={1.2}
      hotspot={0.6}
      brightness={1.2}
      opacity={1}
      pulseSpeed={1.0}
      noiseStrength={0.03}
      idleFade={true}
      idleTimeout={600}
      fadeDuration={800}
      blendMode="screen"
    >
      <Home />
    </GlowCursor>
  );
}
