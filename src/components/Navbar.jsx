import React from 'react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="glass" style={{ 
      margin: '1rem', 
      padding: '1rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      position: 'sticky',
      top: '1rem',
      zIndex: 100
    }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent)' }}>MoodCast ⛈️</h1>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button 
          className="glass btn-scale" 
          onClick={toggleTheme}
          style={{ 
            padding: '0.5rem 1rem', 
            background: isDarkMode ? 'var(--card)' : 'var(--accent)',
            color: isDarkMode ? 'var(--text)' : 'var(--bg)'
          }}
        >
          {isDarkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
