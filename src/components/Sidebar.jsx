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

        <div className="nm-pressed" style={{ 
          marginTop: '2rem', 
          padding: '0.75rem', 
          textAlign: 'center',
          fontSize: '0.65rem',
          color: 'var(--subtext)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          Curated by <span style={{ color: 'var(--accent)', fontWeight: '700' }}>Tarunya</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
