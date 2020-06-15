import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Headline from "./components/Headline";

function App() {
  return (
    <div className="container">
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Headline />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Main>
    </div>
  );
}

export default App;
