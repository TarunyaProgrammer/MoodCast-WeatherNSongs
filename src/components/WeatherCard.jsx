import React from 'react';

const WeatherCard = ({ weather, explanation }) => {
  const { name, main, weather: weatherInfo } = weather;
  const temp = Math.round(main.temp);
  const condition = weatherInfo[0].main;

  return (
    <div className="glass fade-in" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{name}</h2>
          <p style={{ color: 'var(--subtext)' }}>{condition}</p>
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>{temp}°C</div>
      </div>
      <blockquote style={{ 
        fontStyle: 'italic', 
        color: 'var(--accent)', 
        borderLeft: '2px solid var(--accent)', 
        paddingLeft: '1rem',
        marginTop: '1rem'
      }}>
        "{explanation}"
      </blockquote>
    </div>
  );
};

export default WeatherCard;
