import React, { useState, useEffect } from 'react'
import {useRouteMatch} from 'react-router-dom'
import Axios from 'axios'
import {getAllProjects} from '../../helpers/graphql_queries'

const initialValues = {
  proj_name: "",
  description: "",
  gh_link: "",
  live_link: "",
  image_url: ""
}

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [formValues, setFormValues] = useState(initialValues)

  useEffect(() => {
    Axios
    .post('http://localhost:5000/api', getAllProjects)
    .then(res => {
     console.log(res.data.data.projects)
     setProjects(res.data.data.projects)
   })
   .catch(err =>{
     console.log(err);
   })
  },[])
  console.log(projects)

  const onChange = () =>{

  }


  return (
    <div>
      <h1>Hello from Projects</h1>
      <h2>Projects List:</h2>
      <h4>Click Title to Edit</h4>
      {projects.map(p => {
        return (
          <div key = {p._id}>
            <p>{p.proj_name}</p>
            <p>{p.description}</p>
            <p>{p.gh_link}</p>
            <p>{p.live_link}</p>
            <p>{p.image_url}</p>
            <hr/>
          </div>
        )
      })}
      <h2>Add a Project</h2>

      <form>
      <label>Project Name</label>
      <input
        type = 'text'
        name = 'proj.name'
        onChange = {onChange}
        value = {formValues.proj_name}
        />
      <label>Description</label>
      <input
        type = 'text'
        name = 'description'
        onChange = {onChange}
        value = {formValues.description}
        />
        <label>GitHub Link</label>
      <input
        type = 'text'
        name = 'gh_link'
        onChange = {onChange}
        value = {formValues.gh_link}
        />
        <label>Live Link</label>
      <input
        type = 'text'
        name = 'live_link'
        onChange = {onChange}
        value = {formValues.live_link}
        />
        <label>Preview Image</label>
      <input
        type = 'text'
        name = 'image_url'
        onChange = {onChange}
        value = {formValues.image_url}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Projects
