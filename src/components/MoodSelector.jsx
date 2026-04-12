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
            className={`mood-btn ${activeMood === mood ? 'active' : ''}`}
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
