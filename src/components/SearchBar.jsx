import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, onWeatherSearch }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      onWeatherSearch(input);
      onSearch(input); // Also search for songs
    }
  };

  return (
    <div className="search-container slide-right">
      <div style={{ position: 'relative', flex: 1 }}>
        <input 
          type="text" 
          className="input-glass"
          placeholder="Search for vibes or enter a city..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>
          <Search size={18} />
        </span>
      </div>
      <button 
        className="glass btn-scale" 
        style={{ padding: '0 2rem', color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        onClick={() => {
          if (input.trim()) {
            onWeatherSearch(input);
            onSearch(input);
          }
        }}
      >
        <Search size={16} />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
