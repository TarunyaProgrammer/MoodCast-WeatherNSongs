/**
 * MoodCast - Synergy Engine Analytics
 * Author: Tarunya Kesharwani
 */
import React from 'react';
import { CloudSun, Heart, Zap, Youtube, ArrowRight, Sparkles } from 'lucide-react';

const StepCard = ({ icon: Icon, title, description, delay }) => (
  <div 
    className="nm-flat step-card fade-in-staggered" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="nm-pressed icon-container">
      <Icon size={32} />
    </div>
    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
    <p style={{ fontSize: '0.9rem', color: 'var(--subtext)', lineHeight: '1.6' }}>{description}</p>
  </div>
);

const SynergyEngine = () => {
  return (
    <div className="analytics-container fade-in" style={{ padding: '1rem 0' }}>
      <header className="analytics-header-section">
        <div className="nm-pressed algorithm-badge">
          <Sparkles size={14} />
          <span>The Synergy Algorithm</span>
        </div>
        <h1>The Magic Behind <span style={{ color: 'var(--accent)' }}>MoodCast</span></h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--subtext)', maxWidth: '600px', margin: '0 auto' }}>
          Discover how we translate nature's frequency and your emotions into the perfect sonic companion.
        </p>
      </header>

      <div className="steps-container">
        <StepCard 
          icon={CloudSun} 
          title="Weather Pulse" 
          description="We scan atmospheric data in real-time to find your city's natural rhythm."
          delay={0.1}
        />
        <ArrowRight className="flow-arrow" size={24} style={{ color: 'var(--nm-shadow-main)' }} />
        <StepCard 
          icon={Heart} 
          title="Mood Mapping" 
          description="Your current emotion dictates the BPM and tonal scale of the search."
          delay={0.3}
        />
        <ArrowRight className="flow-arrow" size={24} style={{ color: 'var(--nm-shadow-main)' }} />
        <StepCard 
          icon={Zap} 
          title="Synergy Core" 
          description="Our logic merges these frequencies into a unique search vector."
          delay={0.5}
        />
        <ArrowRight className="flow-arrow" size={24} style={{ color: 'var(--nm-shadow-main)' }} />
        <StepCard 
          icon={Youtube} 
          title="Sonic Curation" 
          description="YouTube's depth is filtered through our lens to find hidden gems."
          delay={0.7}
        />
      </div>

      <div className="nm-flat frequency-card">
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Current Frequency</h2>
          <div className="stat-grid">
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
        <div className="separator-line"></div>
        <div className="info-content">
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
