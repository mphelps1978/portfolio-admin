import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Home from "./components/Home";

const Navbar = (props) => {
  return (
    <>
      <List component="nav">
        <ListItem component="div">
          <ListItemText inset>
            <Typography color="inherit" variant="title">
              <Link to="/">Home</Link>
            </Typography>
          </ListItemText>
          <ListItemText inset>
            <Typography color="inherit" variant="title">
              <Link to="/projects">Projects</Link>
            </Typography>
          </ListItemText>
          <ListItemText inset>
            <Typography color="inherit" variant="title">
              <Link to="/resume">Resume Items</Link>
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

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

export default Navbar;
