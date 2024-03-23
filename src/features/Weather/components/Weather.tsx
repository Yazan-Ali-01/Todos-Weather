import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import { useWeather } from '../hooks/useWeather';
import ReusableForm from '@shared/forms/ReusableForm';

const Weather: React.FC = () => {
  const { weather, error, loading, fetchWeather } = useWeather();
  const [lastLocation, setLastLocation] = useState<string>('');

  const handleFormSubmit = async (data: { location: string }) => {
    setLastLocation(data.location); // Update lastLocation with the new location
    fetchWeather(data.location); // No need to await here, as we are showing loading state instead
  };

  const refreshWeatherData = () => {
    if (lastLocation) {
      fetchWeather(lastLocation); // No need to check loading state here, handled in fetchWeather
    }
  };

  // Fields definition remains unchanged
  const formFields = [
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      validationRule: {
        required: 'Location is required',
        minLength: {
          value: 2,
          message: 'Location must be at least 2 characters long'
        }
      }
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ReusableForm
        fields={formFields}
        onSubmit={handleFormSubmit}
        submitButtonText="Check Weather"
      />
      {loading && (
        <div className="text-lg text-center text-gray-500">
          Loading weather data...
        </div>
      )}
      {weather && (
        <>
          <button
            onClick={refreshWeatherData}
            className="mt-2 rounded-lg bg-emerald-500 px-4 py-2 text-white shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Refresh Weather
          </button>
          <WeatherDisplay weather={weather} error={error} />
        </>
      )}
    </div>
  );
};

export default Weather;
