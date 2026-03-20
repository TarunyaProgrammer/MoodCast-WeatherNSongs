const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  if (!API_KEY) {
    console.warn('Weather API key missing. Returning mock data.');
    return {
      name: city,
      main: { temp: 22 },
      weather: [{ main: 'Clear', description: 'clear sky' }]
    };
  }

  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error('City not found');
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
