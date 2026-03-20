import React from 'react';

const SongCard = ({ song, onSelect, onFavoriteToggle, isFavorite }) => {
  const { snippet } = song;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div 
      className="glass card-hover fade-in" 
      style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
      onClick={() => onSelect(song)}
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onFavoriteToggle(song);
        }}
        className="btn-scale"
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          background: 'rgba(0,0,0,0.4)',
          color: isFavorite ? 'var(--error)' : 'white',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          fontSize: '1.2rem',
          border: '1px solid var(--glass-border)',
          zIndex: 10
        }}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <img 
        src={thumbnails.medium.url} 
        alt={title} 
        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1.25rem' }}>
        <h4 style={{ 
          fontSize: '0.95rem', 
          marginBottom: '0.5rem', 
          display: '-webkit-box', 
          WebkitLineClamp: 2, 
          WebkitBoxOrient: 'vertical', 
          overflow: 'hidden',
          lineHeight: '1.4'
        }}>
          {title}
        </h4>
        <p style={{ fontSize: '0.8rem', color: 'var(--subtext)' }}>{channelTitle}</p>
      </div>
    </div>
  );
};

export default SongCard;
