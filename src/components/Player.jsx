import React from 'react';

const Player = ({ song, onClose }) => {
  if (!song) return null;

  const { videoId } = song.id;
  const { title, channelTitle, thumbnails } = song.snippet;

  return (
    <div className="player-premium slide-up">
      <div className="player-track">
        <img src={thumbnails.medium.url} alt={title} className="track-img" />
        <div style={{ overflow: 'hidden' }}>
          <h4 style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h4>
          <p style={{ fontSize: '0.75rem', color: 'var(--subtext)' }}>{channelTitle}</p>
        </div>
      </div>

      <div className="player-controls">
        <div className="control-btns">
          <button className="control-btn">⏮</button>
          <button className="control-btn play">▶</button>
          <button className="control-btn">⏭</button>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '35%' }}></div>
        </div>
      </div>

      <div className="player-extra">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100px' }}>
          <span>🔊</span>
          <div className="progress-bar" style={{ height: '3px' }}>
            <div className="progress-fill" style={{ width: '70%' }}></div>
          </div>
        </div>
        <button onClick={onClose} className="close-btn">Close X</button>
      </div>

      {/* Hidden Iframe for actual playback */}
      <div style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}>
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
