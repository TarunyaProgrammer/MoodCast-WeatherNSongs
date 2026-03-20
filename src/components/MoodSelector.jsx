import React from 'react';

const MoodSelector = ({ moods, activeMood, onSelect }) => {
  return (
    <div className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3 style={{ color: 'var(--subtext)' }}>How are you feeling?</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => onSelect(mood)}
            className={`btn-scale ${activeMood === mood ? 'active' : ''}`}
            style={{
              background: activeMood === mood ? 'var(--accent)' : 'var(--glass-bg)',
              color: activeMood === mood ? 'var(--bg)' : 'var(--text)',
              border: `1px solid ${activeMood === mood ? 'var(--accent)' : 'var(--glass-border)'}`,
              flex: '1',
              minWidth: '100px'
            }}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
