import * as React from "react";
import * as ReactDOM from "react-dom";
import { SubComponent } from "./sub-component";
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
