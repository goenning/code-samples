import * as React from 'react';
import { createHistory, Location, History as BrowserHistory } from 'history';

interface Props {

}

interface State {
  location: Location;
}

interface LinkProps {
  location: Location;
  history: BrowserHistory;
}

interface LinkState {
}

class Link extends React.Component<LinkProps, LinkState> {
  private go() {
    this.props.history.push('/todos');
  }

  public render() {
    return <a onClick={() => this.go()}>{this.props.location.pathname}</a>;
  }
}

class LinkTwo extends React.Component<LinkProps, LinkState> {
  private go() {
    this.props.history.push('/reminders');
  }

  public render() {
    return <a onClick={() => this.go()}>{this.props.location.pathname}</a>;
  }
}

const history = createHistory();
const routes: { [key: string]: React.ComponentClass<any> } = {
  ['/todos']: LinkTwo,
  ['/reminders']: Link
};


export var Enhance = (ComposedComponent: React.ComponentClass<any>) => {
  return <ComposedComponent />;
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      location: history.getCurrentLocation()
    };

    history.listen(this.handleNavigation.bind(this));
  }

  private handleNavigation(location: Location) {
    this.setState({ location });
  }

  public render() {
    const pathname = this.state.location.pathname;
    if (routes.hasOwnProperty(pathname)) {
      return React.createElement(routes[pathname], { history, location: this.state.location });
    }
    return <button onClick={() => history.push('/todos')}>TODOS</button>;
  }
}
