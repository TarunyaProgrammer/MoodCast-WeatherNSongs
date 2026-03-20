import React from 'react';
import { CloudSun, Heart, Zap, Youtube, ArrowRight, Sparkles } from 'lucide-react';

const StepCard = ({ icon: Icon, title, description, delay }) => (
  <div 
    className="glass fade-in-staggered" 
    style={{ 
      padding: '2rem', 
      flex: 1, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center',
      gap: '1rem',
      animationDelay: `${delay}s`,
      border: '1px solid var(--glass-border)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div className="pulse-glow-bg"></div>
    <div className="icon-container" style={{ 
      background: 'rgba(56, 189, 248, 0.1)', 
      padding: '1.25rem', 
      borderRadius: '1rem',
      color: 'var(--accent)',
      marginBottom: '0.5rem'
    }}>
      <Icon size={32} />
    </div>
    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
    <p style={{ fontSize: '0.9rem', color: 'var(--subtext)', lineHeight: '1.6' }}>{description}</p>
  </div>
);

const SynergyEngine = () => {
  return (
    <div className="analytics-container fade-in" style={{ padding: '1rem 0' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--accent-glow)', color: 'var(--accent)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem' }}>
          <Sparkles size={14} />
          <span>The Synergy Algorithm</span>
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '-0.02em' }}>The Magic Behind <span style={{ color: 'var(--accent)' }}>MoodCast</span></h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--subtext)', maxWidth: '600px', margin: '0 auto' }}>
          Discover how we translate nature's frequency and your emotions into the perfect sonic companion.
        </p>
      </header>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', position: 'relative' }}>
        <StepCard 
          icon={CloudSun} 
          title="Weather Pulse" 
          description="We scan atmospheric data in real-time to find your city's natural rhythm."
          delay={0.1}
        />
        <ArrowRight className="flow-arrow" size={24} style={{ color: 'var(--glass-border)' }} />
        <StepCard 
          icon={Heart} 
          title="Mood Mapping" 
          description="Your current emotion dictates the BPM and tonal scale of the search."
          delay={0.3}
        />
        <ArrowRight className="flow-arrow" size={24} style={{ color: 'var(--glass-border)' }} />
        <StepCard 
          icon={Zap} 
          title="Synergy Core" 
          description="Our logic merges these frequencies into a unique search vector."
          delay={0.5}
        />
        <ArrowRight className="flow-arrow" size={24} style={{ color: 'var(--glass-border)' }} />
        <StepCard 
          icon={Youtube} 
          title="Sonic Curation" 
          description="YouTube's depth is filtered through our lens to find hidden gems."
          delay={0.7}
        />
      </div>

      <div className="glass" style={{ marginTop: '4rem', padding: '3rem', display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Current Frequency</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="insight-stat">
              <span className="label">Base Logic</span>
              <span className="value">Contextual Synergy</span>
            </div>
            <div className="insight-stat">
              <span className="label">Sync Rate</span>
              <span className="value">Variable (12ms)</span>
            </div>
            <div className="insight-stat">
              <span className="label">Source Depth</span>
              <span className="value">API Hyper-Search</span>
            </div>
            <div className="insight-stat">
              <span className="label">Engine Ver.</span>
              <span className="value">2.4.0 (Stable)</span>
            </div>
          </div>
        </div>
        <div style={{ width: '1px', height: '150px', background: 'var(--glass-border)' }}></div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--accent)' }}>Why it matters?</h3>
          <p style={{ color: 'var(--subtext)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            Standard algorithms only follow what you've heard before. **MoodCast** follows where you are *now*. By syncing with the environment, we create a feedback loop between reality and sound.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SynergyEngine;
