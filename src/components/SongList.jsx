import React from 'react';
import SongCard from './SongCard';

const SongList = ({ songs, onSongSelect, onFavoriteToggle, favorites }) => {
  if (!songs || songs.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--subtext)' }}>
        No songs found. Try a different mood or city!
      </div>
    );
  }

  return (
    <div className="grid">
      {songs.map((song) => (
        <SongCard 
          key={song.id.videoId || song.id.playlistId} 
          song={song} 
          onSelect={onSongSelect} 
          onFavoriteToggle={onFavoriteToggle}
          isFavorite={favorites?.some(f => f.id.videoId === song.id.videoId)}
        />
      ))}
    </div>
  );
};

export default SongList;
