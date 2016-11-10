import * as React from 'react';

import { Weather } from '../interfaces/Weather';

interface Props {
  weather: Weather;
}

export default class CurrentWeatherItem extends React.Component<Props, null> {
  public render() {
    return (
      <li className="column">
        {this.props.weather.city} ({this.props.weather.country})
        <p>Temp (°C): {this.props.weather.temperature}</p>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.weather.lat},${this.props.weather.long}&size=300x200&zoom=10`} />
      </li>
    );
  }
}
