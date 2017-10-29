import axios from 'axios';
const API_KEY = '8adab830eca9df0e181b90a7e18d0588';

export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},US&appid=${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}