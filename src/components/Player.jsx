import React from 'react';

const Player = ({ song, onClose }) => {
  if (!song) return null;

  const videoId = song.id.videoId;

  return (
    <div className="glass slide-up" style={{ 
      position: 'fixed', 
      bottom: '1rem', 
      left: '1rem', 
      right: '1rem', 
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      boxShadow: '0 -10px 30px rgba(0,0,0,0.5)',
      overflow: 'hidden'
    }}>
      <div style={{ 
        padding: '0.75rem 1.5rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'var(--glass-bg)'
      }}>
        <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--accent)' }}>Now Playing: {song.snippet.title}</span>
        <button onClick={onClose} style={{ background: 'transparent', padding: '0.25rem', fontSize: '1.2rem' }}>×</button>
      </div>
      <div style={{ flex: 1 }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
