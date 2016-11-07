import * as React from 'react';

interface Props {
  showCounter: boolean;
  length: number;
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

  public render() {
    return <textarea></textarea>;
  }
}
