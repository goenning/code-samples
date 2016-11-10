import * as React from 'react';

import AddWeather from './components/AddWeather';
import WeatherList from './components/WeatherList';
import { Weather } from './interfaces/Weather';

interface Props {

}

interface State {
  weathers: Weather[];
}

export default class Root extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      weathers: []
    };

    this.onNewWeather = this.onNewWeather.bind(this);
  }

  private onNewWeather(weather: Weather) {
    this.setState({
      weathers: this.state.weathers.concat(weather)
    });
  }

  public render() {
    return (
      <div className="ui container">
        <AddWeather onNewWeather={this.onNewWeather} />
        <WeatherList weathers={this.state.weathers} />
      </div>
    );
  }
}
