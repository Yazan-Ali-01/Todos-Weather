import { useState } from 'react';
import { getWeatherByLocation } from '@features/Weather/services/weatherService';
import { WeatherApiResponse, WeatherData } from '@interfaces/weather';
import axios from 'axios';

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (location: string) => {
    setLoading(true);
    try {
      const data: WeatherApiResponse = await getWeatherByLocation(location);
      const transformedData: WeatherData = {
        location: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      };
      setWeather(transformedData);
      setError(null);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Check if the error is an AxiosError
        const message =
          err.response?.data?.message || 'An unexpected error occurred';
        setError(`Failed to fetch weather data: ${message}`);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false); // Stop loading after fetching data or if an error occurs
    }
  };

  return { weather, error, loading, fetchWeather };
};
