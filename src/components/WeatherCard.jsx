import React from 'react';
import { Cloud } from 'lucide-react';

const WeatherCard = ({ weather, explanation }) => {
  if (!weather) {
    return (
      <div className="glass weather-premium fade-in">
        <div className="weather-info">
          <h2>Ready to sync?</h2>
          <p style={{ color: 'var(--subtext)' }}>Enter your city to discover weather-inspired music.</p>
        </div>
        <div style={{ fontSize: '4rem', color: 'var(--accent)', opacity: 0.5 }}>
          <Cloud size={64} />
        </div>
      </div>
    );
  }

  const { name, main, weather: weatherInfo } = weather;
  const temp = Math.round(main.temp);
  const condition = weatherInfo[0].main;
  const iconCode = weatherInfo[0].icon;

  // Simple icon mapping or just use OWM icons
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  return (
    <div className="glass weather-premium fade-in">
      <div className="weather-info">
        <h3 style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>Current Weather</h3>
        <h2>{name}</h2>
        <div className="weather-stats">
          <div className="temp-large">{temp}°C</div>
          <div style={{ alignSelf: 'center' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: '500' }}>{condition}</p>
            <p style={{ color: 'var(--subtext)', maxWidth: '400px', marginTop: '0.5rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {explanation}
            </p>
          </div>
        </div>
      </div>
      <div className="weather-visual" style={{ position: 'relative' }}>
         <img src={iconUrl} alt={condition} style={{ width: '150px', filter: 'drop-shadow(0 0 20px var(--accent))' }} />
      </div>
    </div>
  );
};

export default WeatherCard;
