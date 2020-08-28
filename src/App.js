import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Home from "./components/Home";

const client = new ApolloClient({
  uri: 'http://localhost:5000/api',
  cache: new InMemoryCache()
})




const App = () => {

    return (
    <div>
      <ApolloProvider client = {client}>
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
      </ApolloProvider>
    </div>
  );
};

export default App;
