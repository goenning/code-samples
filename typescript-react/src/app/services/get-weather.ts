import * as axios from 'axios';

import { Weather } from '../interfaces/Weather';

function getQueryUrl(city: string) {
  return `https://query.yahooapis.com/v1/public/yql?q=select location, item, astronomy from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}') and u='c'&format=json`;
}

export function getWeather(city: string): Promise<Weather> {
  return axios.get<any>(getQueryUrl(city)).then(response => {
    const channel = response.data.query.results.channel;
    const weather: Weather = {
      city: channel.location.city,
      country: channel.location.country,
      temperature: channel.item.condition.temp,
      sunrise: channel.astronomy.sunrise,
      sunset: channel.astronomy.sunset,
      lat: channel.item.lat,
      long: channel.item.long
    };
    return weather;
  });
};
