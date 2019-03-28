import * as React from "react";

interface IProps {
  numbers: number[];
}

export class NumberList extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }
  listItems() {
    this.props.numbers.map(number => <li key={number.toString()}>{number}</li>);
  }
  render() {
    return <ul>{this.listItems}</ul>;
  }
}
