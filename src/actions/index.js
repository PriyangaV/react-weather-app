import axios from 'axios';

const API_KEY = 'bfb4ed92094242bd54319ef50ad2a76d';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`,
        request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}