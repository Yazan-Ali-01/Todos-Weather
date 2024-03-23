import React from 'react';

// Define a type for the weather data you expect to receive
export interface WeatherData {
  location: string;
  temperature: number; // Assuming temperature is a number
  description: string;
  humidity: number; // Assuming humidity is a number
  windSpeed: number; // Assuming wind speed is a number
}

interface WeatherDisplayProps {
  weather: WeatherData | null; // The weather prop can be null if no data is fetched yet
  error: string | null; // Include an error prop to display any errors that might have occurred
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather, error }) => {
  console.log(weather);

  if (error) {
    return (
      <div className="text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!weather) {
    return null; // or some loading indicator
  }

  return (
    <div className="mx-auto flex flex-col w-full  rounded-lg bg-slate-950/95 p-4 shadow-md">
      <h2 className="mb-2 text-center text-2xl  text-slate-200">
        Weather in
        <span className="text-emerald-400">{weather.location}</span>
      </h2>
      <div className="space-y-3">
        <p className="text-slate-200">
          <span className="">Temperature:</span> {weather.temperature}
          °C
        </p>
        <p className="text-slate-200">
          <span className="">Description:</span> {weather.description}
        </p>
        <p className="text-slate-200">
          <span className="">Humidity:</span> {weather.humidity}%
        </p>
        <p className="text-slate-200">
          <span className="">Wind Speed:</span> {weather.windSpeed} km/h
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
