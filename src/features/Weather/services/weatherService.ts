import axios from 'axios';
import { WeatherApiResponse } from '@interfaces/weather';

const API_KEY = '615053f7423138f8e06be81b1be63482'; //this should be secured in .env variable

export const getWeatherByLocation = async (
  location: string
): Promise<WeatherApiResponse> => {
  const response = await axios.get<WeatherApiResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};
