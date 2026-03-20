/**
 * MoodCast - Bottom Navigation (Mobile)
 * Author: Tarunya Kesharwani
 */
import React from 'react';
import { LayoutDashboard, Music, Smile, BarChart2 } from 'lucide-react';

const navItems = [
  { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'Playlists', icon: Music, label: 'Playlists' },
  { id: 'Moods', icon: Smile, label: 'Moods' },
  { id: 'Analytics', icon: BarChart2, label: 'Analytics' },
];

const BottomNav = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <div 
          key={item.id} 
          className={`bottom-nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => onTabChange(item.id)}
        >
          <item.icon size={20} />
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
