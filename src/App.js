import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Home from "./components/Home";



const App = () => {

    return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume Items</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </>
  );
};

export default App;
