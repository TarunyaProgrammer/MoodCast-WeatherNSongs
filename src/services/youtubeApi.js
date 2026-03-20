const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchSongs = async (query) => {
  if (!API_KEY) {
    console.warn('YouTube API key missing. Returning mock data.');
    return [
      {
        id: { videoId: 'dQw4w9WgXcQ' },
        snippet: {
          title: 'Never Gonna Give You Up',
          channelTitle: 'Rick Astley',
          thumbnails: { medium: { url: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg' } }
        }
      },
      {
        id: { videoId: '9bZkp7q19f0' },
        snippet: {
          title: 'PSY - GANGNAM STYLE',
          channelTitle: 'officialpsy',
          thumbnails: { medium: { url: 'https://i.ytimg.com/vi/9bZkp7q19f0/mqdefault.jpg' } }
        }
      }
    ];
  }

  try {
    const response = await fetch(
      `${BASE_URL}?part=snippet&maxResults=12&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`
    );
    if (!response.ok) throw new Error('YouTube search failed');
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};
