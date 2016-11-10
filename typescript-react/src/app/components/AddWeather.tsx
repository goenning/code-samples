import * as React from 'react';

import { Weather } from '../interfaces/Weather';
import { getWeather } from '../services/get-weather';

interface Props {
  onNewWeather(weather: Weather): void;
}

interface State {
  text: string;
}

export default class AddWeather extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ''
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  private onTextChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ text: e.currentTarget.value });
  }

  private onSubmit(e: React.FormEvent<HTMLFormElement>) {
    getWeather(this.state.text).then((weather) => {
      this.props.onNewWeather(weather);
      this.setState({ text: '' });
    });
    e.preventDefault();
  }

  public render() {
    return (
        <form className="ui action input fluid" onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onTextChange} value={this.state.text} placeholder="Type the name of the city (ex.: Blumenau, New York, etc.)" />
          <button type="submit" className="ui button">Add</button>
        </form>
    );
  }
}
