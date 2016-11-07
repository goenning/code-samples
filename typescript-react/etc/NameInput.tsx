import * as React from 'react';

interface ComponentProps {
  name: string;
  onChange?: (text: string) => void;
}

interface ComponentState {
  name: string;
  isDirty: boolean;
}

export default class NameInput extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      isDirty: false,
      name: this.props.name
    };
  }

  public render() {
    return <div>
            <i className="add to calendar icon" />
            <i className="france flag" />
            <input type="text" value={this.state.name} onChange={this.changeName.bind(this)} />
          </div>;
  }

  private changeName(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ isDirty: true, name: event.currentTarget.value });
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value);
    }
  }
}
