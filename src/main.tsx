import * as React from "react";
import * as ReactDOM from "react-dom";
import { SubComponent } from "./sub-component";
import { Clock } from "./clock";
import { Toggle } from "./toggle";
import { NumberList } from "./number-list";
import styled, { css } from "styled-components";

interface InterfaceMyProps {
  primary?: boolean;
  onClick: () => void;
}

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <SubComponent name="My Counter for TypeScript" />
        <StyledButton>aaa</StyledButton>
        <Clock />
        <Clock />
        <Toggle />
        aa
        <NumberList numbers={[1, 2, 3]} />
        nn
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
