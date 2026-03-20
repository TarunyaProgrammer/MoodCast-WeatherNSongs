import React from 'react';
import { Sun, CloudRain, Coffee, Zap } from 'lucide-react';

const MoodSelector = ({ moods, activeMood, onSelect }) => {
  return (
    <div className="glass mood-selector-container">
      <h3 className="section-title">Current Mood</h3>
      <div className="mood-grid">
        {moods.map((mood) => (
          <div
            key={mood}
            onClick={() => onSelect(mood)}
            className={`btn-scale ${activeMood === mood ? 'active' : ''}`}
            style={{
              background: activeMood === mood ? 'var(--accent)' : 'rgba(255,255,255,0.03)',
              color: activeMood === mood ? 'var(--bg)' : 'var(--text)',
              padding: '1.5rem 1rem',
              borderRadius: '1rem',
              textAlign: 'center',
              cursor: 'pointer',
              border: `1px solid ${activeMood === mood ? 'var(--accent)' : 'var(--glass-border)'}`,
              boxShadow: activeMood === mood ? '0 0 20px var(--accent-glow)' : 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {mood === 'Happy' && <Sun size={24} />}
              {mood === 'Sad' && <CloudRain size={24} />}
              {mood === 'Chill' && <Coffee size={24} />}
              {mood === 'Energetic' && <Zap size={24} />}
            </span>
            <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{mood}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
