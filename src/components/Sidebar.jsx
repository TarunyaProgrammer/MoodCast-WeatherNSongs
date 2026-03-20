/**
 * MoodCast - Sidebar Navigation
 * Author: Tarunya Kesharwani
 */
import React from 'react';
import Logo from './Logo';
import { LayoutDashboard, Music, Smile, BarChart2, Settings, Sun, Moon, User } from 'lucide-react';

const Sidebar = ({ activeTab, onTabChange, isDarkMode, toggleTheme }) => {
  const navItems = [
    { title: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { title: 'Playlists', icon: <Music size={20} /> },
    { title: 'Moods', icon: <Smile size={20} /> },
    { title: 'Analytics', icon: <BarChart2 size={20} /> },
    { title: 'Settings', icon: <Settings size={20} /> },
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

      <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
        <button 
          onClick={toggleTheme} 
          className="nav-item" 
          style={{ width: '100%', border: 'none', background: 'transparent' }}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        <div className="nav-item">
          <User size={20} />
          <span>My Profile</span>
        </div>

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem', 
          borderRadius: '1rem', 
          background: 'var(--glass-bg)',
          textAlign: 'center',
          fontSize: '0.7rem',
          color: 'var(--subtext)',
          border: '1px solid var(--glass-border)'
        }}>
          <p>Created with ❤️ by</p>
          <p style={{ color: 'var(--accent)', fontWeight: '600', marginTop: '0.25rem' }}>Tarunya Kesharwani</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
