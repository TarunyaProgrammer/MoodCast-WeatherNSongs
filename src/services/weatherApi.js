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
    console.log(`Fetching weather for: ${city}...`);
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Weather API Error:', errorData);
      throw new Error(`City not found: ${errorData.message}`);
    }
    const data = await response.json();
    console.log('Weather Data Received:', data);
    return data;
  } catch (error) {
    console.error('Fetch Weather Failed:', error.message);
    throw error;
  }
};
