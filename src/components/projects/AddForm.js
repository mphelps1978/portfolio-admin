import React, { useState } from 'react'


const AddForm = (props) => {

  const [newProject, setNewProject] = useState({
    proj_name: "",
    description: "",
    gh_link: "",
    live_link: "",
    image_url: ""
  })

  const changeHandler = e => {
    setNewProject({...newProject, [e.target.name]: e.target.value})
  }

  const submitForm = e => {
    e.preventDefault()
    props.addNewProject(newProject)
    setNewProject({
      proj_name: "",
      description: "",
      gh_link: "",
      live_link: "",
      image_url: ""
    })
  }

  return (
    <div>

      <h2>Add a Project</h2>

      <form onSubmit = {submitForm}>
      <label>
        Project Name:
        <input
          type = 'text'
          name = 'proj_name'
          value = {newProject.proj_name}
          onChange = {changeHandler}
          />
        </label>
      <label>Description</label>
      <input
        type = 'text'
        name = 'description'
        onChange = {changeHandler}
        value = {newProject.description}
        />
        <label>GitHub Link</label>
      <input
        type = 'text'
        name = 'gh_link'
        onChange = {changeHandler}
        value = {newProject.gh_link}
        />
        <label>Live Link</label>
      <input
        type = 'text'
        name = 'live_link'
        onChange = {changeHandler}
        value = {newProject.live_link}
        />
        <label>Preview Image</label>
      <input
        type = 'text'
        name = 'image_url'
        onChange = {changeHandler}
        value = {newProject.image_url}
        />
        <button>Submit</button>
      </form>
    </div>
  )
  }

export default AddForm
