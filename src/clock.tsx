import * as React from "react";

interface IProps {
  date?: Date;
}

interface IState {
  date?: Date;
}

export class Clock extends React.Component<IProps, IState> {
  timerID: number;
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
