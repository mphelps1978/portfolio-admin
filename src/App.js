import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { List, ListItem, ListItemText, Typography, AppBar, Toolbar } from "@material-ui/core";

import Home from "./components/Home";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import AddForm from "./components/projects/AddForm";
import EditForm from "./components/projects/EditForm"

const client = new ApolloClient({
  uri: "http://localhost:5000/api",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
    <div>
    <ApolloProvider client={client}>
    <AppBar color="primary" position="static">
    <Toolbar>
    <Typography variant="h2" color="inherit">
    Portfolio Administration
    </Typography>
    </Toolbar>
    </AppBar>
    <List component="nav">
        <ListItem component="div">
          <ListItemText inset>
            <Typography color="inherit" variant="h6">
              <Link to="/">Home</Link>
            </Typography>
          </ListItemText>
          <ListItemText inset>
            <Typography color="inherit" variant="h6">
              <Link to="/projects">Projects</Link>
            </Typography>
          </ListItemText>
          <ListItemText inset>
            <Typography color="inherit" variant="h6">
              <Link to="/resume">Resume Items</Link>
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/projects" component = {Projects} />
        <Route path="/resume" component = {Resume} />
        <Route path="/addproject" component = {AddForm} />
        <Route path="/edit/:id"/>
      </Switch>
      </ApolloProvider>
    </div>
    </>
  );
};

export default App;
