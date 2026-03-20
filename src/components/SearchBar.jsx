import React, { useState } from 'react';

const SearchBar = ({ onSearch, onWeatherSearch }) => {
  const [input, setInput] = useState('');

  const handleWeatherChange = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      onWeatherSearch(input);
      setInput('');
    }
  };

  return (
    <div className="glass" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <h3 style={{ marginBottom: '0.5rem', color: 'var(--subtext)' }}>Whre are you?</h3>
      <input 
        type="text" 
        placeholder="Enter city (e.g. London, Tokyo)..." 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleWeatherChange}
      />
      <p style={{ fontSize: '0.8rem', color: 'var(--subtext)' }}>Press Enter to sync vibes with the weather.</p>
    </div>
  );
};

export default SearchBar;
