import React from 'react';

const Logo = () => {
  return (
    <div className="sidebar-logo">
      <div className="soundwave">
        <div className="soundwave-bar" style={{ animationDelay: '0.1s' }}></div>
        <div className="soundwave-bar" style={{ animationDelay: '0.3s' }}></div>
        <div className="soundwave-bar" style={{ animationDelay: '0.2s' }}></div>
        <div className="soundwave-bar" style={{ animationDelay: '0.4s' }}></div>
        <div className="soundwave-bar" style={{ animationDelay: '0.1s' }}></div>
      </div>
      <span>MoodCast</span>
    </div>
  );
};

export default Logo;
