import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [location, setLocation] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data from an API based on the selected location
    fetch(`https://api.example.com/weather?location=${location}`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, [location]);

  return (
    <div>
      <h1>Weather App</h1>
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {weatherData ? (
        <div>
          <h2>Weather in {location}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.condition}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherApp;
