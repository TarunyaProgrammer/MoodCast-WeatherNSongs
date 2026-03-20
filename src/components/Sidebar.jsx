/**
 * MoodCast - Sidebar Navigation
 * Author: Tarunya Kesharwani
 */
import React from 'react';
import Logo from './Logo';
import { LayoutDashboard, Music, Smile, BarChart2, Sun, Moon } from 'lucide-react';

const Sidebar = ({ activeTab, onTabChange, isDarkMode, toggleTheme }) => {
  const navItems = [
    { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'Playlists', icon: Music, label: 'Playlists' },
    { id: 'Moods', icon: Smile, label: 'Moods' },
    { id: 'Analytics', icon: BarChart2, label: 'Analytics' },
  ];

  return (
    <aside className="sidebar">
      <div style={{ marginBottom: '3rem' }}>
        <Logo />
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {navItems.map((item) => (
          <div 
            key={item.id} 
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
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
