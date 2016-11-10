import * as React from 'react';

import { Weather } from '../interfaces/Weather';
import WeatherItem from './WeatherItem';

interface Props {
  weathers: Weather[];
}

interface State {
}

export default class WeatherList extends React.Component<Props, State> {
  public render() {
    const list =  this.props.weathers.map(w => <WeatherItem weather={w} key={w.city} />);
    return (
      <ul className="ui three column doubling grid">
        {list}
      </ul>
    );
  }
}
