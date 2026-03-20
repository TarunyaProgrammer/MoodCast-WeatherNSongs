import React from 'react';

const SongCard = ({ song, onSelect, onFavoriteToggle, isFavorite }) => {
  const { snippet } = song;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div 
      className="glass card-hover fade-in" 
      style={{ 
        overflow: 'hidden', 
        cursor: 'pointer', 
        position: 'relative',
        borderRadius: '1.25rem',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}
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
          top: '0.75rem',
          right: '0.75rem',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          color: isFavorite ? '#ff4b4b' : 'white',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          fontSize: '1rem',
          border: '1px solid rgba(255,255,255,0.1)',
          zIndex: 10
        }}
      >
        {isFavorite ? '❤️' : '🤍'}
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
