import React from 'react';

const MoodSelector = ({ moods, activeMood, onSelect }) => {
  return (
    <div className="glass" style={{ padding: '2rem', marginTop: '2.5rem' }}>
      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '500', color: 'var(--subtext)' }}>Current Mood</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
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
            <span style={{ fontSize: '1.5rem' }}>
              {mood === 'Happy' && '☀️'}
              {mood === 'Sad' && '🌧️'}
              {mood === 'Chill' && '🧘'}
              {mood === 'Energetic' && '⚡'}
            </span>
            <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{mood}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
