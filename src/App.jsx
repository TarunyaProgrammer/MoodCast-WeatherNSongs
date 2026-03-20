import { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import MoodSelector from './components/MoodSelector';
import WeatherCard from './components/WeatherCard';
import SongList from './components/SongList';
import Player from './components/Player';
import SearchBar from './components/SearchBar';
import { fetchWeather } from './services/weatherApi';
import { fetchSongs } from './services/youtubeApi';
import { useDebounce } from './hooks/useDebounce';
import './index.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [mood, setMood] = useState('Chill');
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('none');
  const [filterShort, setFilterShort] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('moodcast_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('moodcast_theme');
    return saved === 'dark' || !saved; // Default to dark
  });

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const moods = ['Happy', 'Sad', 'Chill', 'Energetic'];

  // Handle Theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('moodcast_theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('moodcast_theme', 'light');
    }
  }, [isDarkMode]);

  // Handle Favorites Persistence
  useEffect(() => {
    localStorage.setItem('moodcast_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError('Could not find weather for this city.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getQuery = (weatherType, mood) => {
    const type = weatherType?.toLowerCase() || 'clear';
    const combinations = {
      'rain': { 'Happy': 'upbeat rain music', 'Sad': 'melancholic rain songs', 'Chill': 'lofi rain music', 'Energetic': 'intense rain vibes' },
      'clear': { 'Happy': 'happy upbeat songs', 'Sad': 'emotional ballads', 'Chill': 'summer chill lounge', 'Energetic': 'high energy workout' },
      'clouds': { 'Happy': 'light cheerful indie', 'Sad': 'gloomy atmospheric tracks', 'Chill': 'cloudy day lofi', 'Energetic': 'cloudy drive synthwave' }
    };
    const weatherKey = combinations[type] ? type : 'clear';
    return combinations[weatherKey][mood] || `${mood} ${type} music`;
  };

  const handleFetchSongs = async (searchQuery) => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const data = await fetchSongs(searchQuery);
      setSongs(data);
    } catch (err) {
      setError('Failed to fetch songs.');
    } finally {
      setLoading(false);
    }
  };

  // Build query from Weather + Mood
  useEffect(() => {
    const weatherType = weather?.weather[0]?.main || 'Clear';
    const searchQuery = getQuery(weatherType, mood);
    handleFetchSongs(searchQuery);
  }, [weather, mood]);

  // Handle debounced search
  useEffect(() => {
    if (debouncedSearchTerm) {
      handleFetchSongs(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const toggleFavorite = (song) => {
    const songId = song.id.videoId;
    if (favorites.some(f => f.id.videoId === songId)) {
      setFavorites(favorites.filter(f => f.id.videoId !== songId));
    } else {
      setFavorites([...favorites, song]);
    }
  };

  // Higher-Order Functions (Filter & Sort)
  const processedSongs = useMemo(() => {
    let result = [...songs];

    // Filter by "Short" - Simulated since YouTube Search API doesn't give duration in snippet
    // We'll mark videos with "Short" in title as short if duration isn't available
    if (filterShort) {
      result = result.filter(song => 
        song.snippet.title.toLowerCase().includes('short') || 
        song.snippet.title.length < 40 // Heuristic for shorter content titles
      );
    }

    // Sort by Title (A-Z)
    if (sortBy === 'title') {
      result.sort((a, b) => a.snippet.title.localeCompare(b.snippet.title));
    }

    return result;
  }, [songs, sortBy, filterShort]);

  const explanation = () => {
    if (!weather) return `Showing songs for a ${mood} mood.`;
    const weatherType = weather.weather[0].main;
    return `Because it’s ${weatherType.toLowerCase()} and you selected “${mood.toLowerCase()}”, here are some tracks for you.`;
  };

  return (
    <div className="App fade-in">
      <Navbar isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
      
      <main className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '8rem' }}>
          <SearchBar 
            onSearch={setSearchTerm} 
            onWeatherSearch={handleSearchWeather} 
          />
          
          <MoodSelector 
            moods={moods} 
            activeMood={mood} 
            onSelect={setMood} 
          />

          {weather && (
            <WeatherCard 
              weather={weather} 
              explanation={explanation()} 
            />
          )}

          <div className="glass" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: '600' }}>Filters:</span>
            <button 
              onClick={() => setFilterShort(!filterShort)}
              className={filterShort ? 'glass' : ''}
              style={{ padding: '0.4rem 0.8rem', background: filterShort ? 'var(--accent)' : 'transparent', color: filterShort ? 'var(--bg)' : 'var(--text)', border: '1px solid var(--glass-border)' }}
            >
              Short Videos (&lt; 5m)
            </button>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span>Sort:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="glass"
                style={{ padding: '0.4rem', border: 'none', color: 'var(--text)', outline: 'none' }}
              >
                <option value="none">Default</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>

          {error && <p style={{ color: 'var(--error)' }}>{error}</p>}
          
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div className="loader">Loading vibes...</div>
            </div>
          ) : (
            <>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--accent)' }}>Top Suggestions</h2>
              <SongList 
                songs={processedSongs} 
                onSongSelect={setCurrentSong} 
                onFavoriteToggle={toggleFavorite}
                favorites={favorites}
              />
            </>
          )}

          {favorites.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '1rem' }}>Your Favorites ❤️</h2>
              <SongList 
                songs={favorites} 
                onSongSelect={setCurrentSong} 
                onFavoriteToggle={toggleFavorite}
                favorites={favorites}
              />
            </div>
          )}
        </div>
      </main>

      {currentSong && (
        <Player 
          song={currentSong} 
          onClose={() => setCurrentSong(null)} 
        />
      )}
    </div>
  );
}

export default App;
