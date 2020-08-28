import React, { useState } from "react";

import DisplayProjects from "./DisplayProjects";
import AddForm from "./AddForm";



const Projects = () => {
  const[projects, setProjects] = useState([])

  return (
    <div>
      <h1>Projects Page</h1>
      <DisplayProjects projects = {projects} />
      <br />
      <AddForm setProjects = {setProjects} />
    </div>
  );
};
export default Projects;
