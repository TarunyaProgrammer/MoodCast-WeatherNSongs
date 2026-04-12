import React from 'react';
import { Heart } from 'lucide-react';

const SongCard = ({ song, onSelect, onFavoriteToggle, favorites }) => {
  const isFavorite = favorites.some(f => f.id.videoId === song.id.videoId);
  const { snippet } = song;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div 
      className="nm-flat song-card fade-in" 
      onClick={() => onSelect(song)}
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onFavoriteToggle(song);
        }}
        className={`nm-fav-btn ${isFavorite ? 'active' : ''}`}
      >
        <Heart size={18} fill={isFavorite ? 'var(--accent)' : 'none'} color={isFavorite ? 'var(--accent)' : 'currentColor'} />
      </button>

      <img 
        src={thumbnails.medium.url} 
        alt={title} 
        style={{ width: '100%', height: '160px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1.25rem' }}>
        <h4 style={{ 
          fontSize: '0.9rem', 
          fontWeight: '500',
          marginBottom: '0.5rem', 
          display: '-webkit-box', 
          WebkitLineClamp: 2, 
          WebkitBoxOrient: 'vertical', 
          overflow: 'hidden',
          lineHeight: '1.4',
          color: 'var(--text)'
        }}>
          {title}
        </h4>
        <p style={{ fontSize: '0.75rem', color: 'var(--subtext)' }}>{channelTitle}</p>
      </div>
    </div>
  );
};

export default SongCard;
