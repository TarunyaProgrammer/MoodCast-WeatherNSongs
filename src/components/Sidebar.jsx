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

      <div style={{ marginTop: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div className="nav-item" onClick={toggleTheme}>
          <span>{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}</span>
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </div>
        <div className="nav-item">
          <span><User size={20} /></span>
          <span>My Profile</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
