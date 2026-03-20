# MoodCast ⛈️🎵

A dark-mode-first React web application that suggests and plays music based on user mood and current weather.

## Features

- **Weather-Music Sync**: Automatically generates song queries based on local weather and selected mood.
- **Interactive Music Player**: Integrated YouTube iframe player.
- **Search with Debouncing**: Fast and efficient song search.
- **Favorites**: Save your favorite tracks locally.
- **Glassmorphism UI**: Modern, premium design with smooth CSS animations.

## Tech Stack

- **React** (Hooks & Functional Components)
- **Vanilla CSS** (Custom styling system)
- **APIs**: OpenWeatherMap, YouTube Data API v3
- **Storage**: localStorage for persistent favorites and theme.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Create a `.env` file from `.env.example` and add your API keys:
   - [OpenWeatherMap API Key](https://openweathermap.org/api)
   - [YouTube Data API Key](https://console.cloud.google.com/apis/library/youtube.googleapis.com)
4. Run the development server: `npm run dev`

## Interactive Features

- **Filter**: Find short videos (< 5 min) for a quick vibe check.
- **Sort**: Organize your results alphabetically.
- **Dark Mode**: Persisted preference across sessions.

---

Built with ❤️ for a modern music experience.
