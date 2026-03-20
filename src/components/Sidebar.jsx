import React from 'react';
import Logo from './Logo';

const Sidebar = ({ activeTab, onTabChange, isDarkMode, toggleTheme }) => {
  const navItems = [
    { title: 'Dashboard', icon: '🏠' },
    { title: 'Playlists', icon: '🎵' },
    { title: 'Moods', icon: '😊' },
    { title: 'Analytics', icon: '📊' },
    { title: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      <Logo />
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div 
            key={item.title}
            className={`nav-item ${activeTab === item.title ? 'active' : ''}`}
            onClick={() => onTabChange(item.title)}
          >
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="nav-item" onClick={toggleTheme}>
          <span>{isDarkMode ? '☀️' : '🌙'}</span>
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </div>
        <div className="nav-item">
          <span>👤</span>
          <span>My Profile</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
