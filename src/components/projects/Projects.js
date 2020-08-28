import React, { useState, useEffect } from "react";
import Axios from "axios";

import { getAllProjects } from "../../helpers/graphql_queries";

import DisplayProjects from "./DisplayProjects";
import AddForm from "./AddForm";

const Projects = () => {
  const [newProject, setNewProject] = useState();
  const [projects, setProjects] = useState([]);

  const addNewProject = (formEntry) => {
    setNewProject(formEntry);
  };

  useEffect(() => {
    Axios.post("http://localhost:5000/api", getAllProjects)
    .then((res) => {
      //  console.log(res.data.data.projects)
      setProjects(res.data.data.projects);
      // console.log(projects)
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  // console.log(projects)
  console.log(newProject);
  return (
    <div>
      <h1>Projects Page</h1>
      <DisplayProjects projects={projects} />
      <br />
      <AddForm addNewProject={addNewProject} />
    </div>
  );
};
export default Projects;
