import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <Main>
        <h1>Welcome</h1>
      </Main>
    </div>
  );
}

export default App;
