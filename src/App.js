import React from "react";
import "./styles.css";
import { ApplicationRoutes } from "./components/ApplicationRoutes";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <ApplicationRoutes />
      </div>
    );
  }
}
