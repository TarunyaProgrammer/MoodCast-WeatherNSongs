# MoodCast

**Author:** Tarunya Kesharwani  
**Deployment:** [Live Application](https://tarunya-moodcast.vercel.app/)

## Overview

MoodCast is an advanced music discovery and dashboard application designed to synchronize auditory experiences with environmental and emotional contexts. Utilizing a specialized algorithmic approach referred to as the "Synergy Engine," the platform aggregates real-time atmospheric data and user-defined mood states to generate precisely curated sonic environments.

![MoodCast Preview](./public/PreView.png)

## Technical Features

### The Synergy Engine
At the core of MoodCast is a proprietary logic layer that merges multi-source data points. The engine processes local weather conditions (temperature, precipitation, visibility) and intersects them with psychological mood profiles to formulate optimized search queries for the YouTube Data API.

### Dynamic Intelligence
- **Real-time Meteorological Integration**: Connects to the OpenWeatherMap API to retrieve high-fidelity atmospheric data based on geographical location.
- **Contextual Music Discovery**: Leverages the YouTube Data API v3 to provide a theoretically infinite library of high-resolution audio tracks.
- **State-Driven UI**: The interface dynamically reconfigures its visual language and recommendations as environment or user input evolves.

### Design and User Experience
- **Premium Aesthetics**: Implements a glassmorphic design system utilizing Backdrop Filters, layered gradients, and a modern typography stack.
- **Adaptive Themes**: Features a dual-thematic engine with a high-contrast Light Mode and a deep-fidelity Dark Mode, managed via CSS Custom Properties and local state persistence.
- **Optimized Performance**: Utilizes custom hooks for logic isolation, including debouncing for API request optimization and persistent storage for user preferences.

## Technology Stack

- **Frontend Framework**: React 19 (Utilizing Hooks and Functional Component Architecture)
- **Styling**: Vanilla CSS3 (Custom Design System, Flex/Grid Layouts, Keyframe Animations)
- **Iconography**: Lucide React
- **APIs**: YouTube Data API v3, OpenWeatherMap API
- **Tooling**: Vite (Build System), ESLint

## Development Setup

### Prerequisites
- Node.js (Latest stable version recommended)
- API Keys for OpenWeatherMap and YouTube Data API v3

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TarunyaProgrammer/MoodCast-WeatherNSongs.git
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and populate it with your credentials:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   VITE_YOUTUBE_API_KEY=your_api_key_here
   ```

4. **Execute Local Development Server:**
   ```bash
   npm run dev
   ```

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.
- **Attribution**: You must provide appropriate credit to **Tarunya Kesharwani**.
- **Non-Commercial**: This software may not be used for commercial purposes.

---
© 2026 Tarunya Kesharwani. All Rights Reserved.
