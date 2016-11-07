import * as React from 'react';

interface Props {
  showCounter: boolean;
  length: number;
  height?: number;
  width?: number;
}

interface State {
  content: string;
}

export default class LimitedLengthTextBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  public handleChange(event: React.FormEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.value.length > this.props.length)
      return;

    this.setState({
      content: event.currentTarget.value
    });
  }

  public render() {
    const minHeight = this.props.height || 100;
    const width = this.props.width || 400;
    const counter = this.props.showCounter
        ? <p>You have typed {this.state.content.length} of {this.props.length} characters allowed</p>
        : undefined;

    return (
      <div>
        <textarea style={ {width, minHeight} } value={this.state.content} onChange={(event) => this.handleChange(event)}></textarea>
        {counter}
      </div>
    );
  }
}
