import React, { useState } from 'react'
import {gql, useMutation} from '@apollo/client'

const ADD_PROJECT = gql `
  mutation createProjectItem($proj_name: String!, $description: String!, $gh_link: String!, $live_link: String!, $image_url: String!) {
    createProjectItem(
      ProjectItemInput:{
        proj_name: $proj_name
        description: $description,
        gh_link: $gh_link,
        live_link: $live_link,
        image_url: $image_url
      }) {
        _id
        proj_name
      }
  }
`

const AddForm = (props) => {
  const [createProjectItem] = useMutation(ADD_PROJECT)
  const [details, setDetails] = useState({
    proj_name: '',
    description: '',
    gh_link: '',
    live_link: '',
    image_url: ''
  })

  const {proj_name, description, gh_link, live_link, image_url} = details

  // const [proj_name, setProj_name] = useState('')
  // const [description, setDescription] = useState('')
  // const [gh_link, setGh_link] = useState('')
  // const [live_link, setLive_link] = useState('')
  // const [image_url, setImage_url] = useState('')

  const submitForm = e => {
    // e.preventDefault()
    createProjectItem({ variables: {proj_name, description, gh_link, live_link, image_url}})
    .then(res =>{
      console.log('Success!')
    })
    .catch(err => {
      console.log(err)
    })

    setDetails({
      proj_name: '',
      description: '',
      gh_link: '',
      live_link: '',
      image_url: ''
  })}

  const changeDetails = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>

      <h2>Add a Project</h2>

      <form onSubmit = {submitForm}>

      <label>
        Project Name:
        <input
          name = 'proj_name'
          value = {proj_name}
          onChange = {changeDetails}
          />
        </label>
      <label>Description</label>
      <input
        name = 'description'
        value = {description}
        onChange = {changeDetails}
        />
        <label>GitHub Link</label>
      <input
        name  = 'gh_link'
        value = {gh_link}
        onChange = {changeDetails}
        />
        <label>Live Link</label>
      <input
        name = 'live_link'
        value = {live_link}
        onChange = {changeDetails}
        />
        <label>Preview Image</label>
      <input
        name = 'image_url'
        value = {image_url}
        onChange = {changeDetails}
        />
        <button type = 'submit'>Submit</button>
      </form>
    </div>
  )
  }

export default AddForm
