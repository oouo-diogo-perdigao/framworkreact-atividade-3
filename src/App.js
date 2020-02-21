import React from "react";
import "./styles.css";
import { MoviesList } from "./components/MoviesList";

export default function App() {
  console.log("app");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MoviesList />
    </div>
  );
}
