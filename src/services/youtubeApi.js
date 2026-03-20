/**
 * MoodCast - YouTube API Service
 * Author: Tarunya Kesharwani
 */
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
    console.log(`[YouTube API] Fetching songs for: "${query}"`);
    const response = await fetch(
      `${BASE_URL}?part=snippet&maxResults=12&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[YouTube API] Fetch failed:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData.error
      });
      throw new Error(`YouTube search failed: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`[YouTube API] Successfully fetched ${data.items?.length || 0} items.`);
    return data.items;
  } catch (error) {
    console.error('[YouTube API] Network or Parsing Error:', error);
    throw error;
  }
};
