import React from 'react';
import { X } from 'lucide-react';

const Player = ({ song, onClose }) => {
  if (!song) return null;

  const { videoId } = song.id;

  return (
    <div className="nm-flat player-fixed slide-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h4 style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>Now Playing</h4>
        <button onClick={onClose} className="close-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <X size={14} />
          Close
        </button>
      </div>
      
      <div style={{ borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '16/9' }}>
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
