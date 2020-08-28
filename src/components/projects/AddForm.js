import React, { useState } from 'react'
import {gql, useMutation} from '@apollo/client'

const ADD_PROJECT = gql `
  mutation ProjectItemInput($proj_name: String!, $description: String!, $gh_link: String!, $live_link: String!, $image_url: String!) {
    createProjectItem(
      proj_name: $proj_name,
      description: $description,
      gh_link: $gh_link,
      live_link: $live_link,
      image_url: $image_url
      ) {
        _id
        proj_name
      }
  }
`

const AddForm = (props) => {
  const [createProjectItem] = useMutation(ADD_PROJECT)
  const [proj_name, setProj_name] = useState('')
  const [description, setDescription] = useState('')
  const [gh_link, setGh_link] = useState('')
  const [live_link, setLive_link] = useState('')
  const [image_url, setImage_url] = useState('')

  const submitForm = e => {
    e.preventDefault()
    createProjectItem({ variables: {proj_name, description, gh_link, live_link, image_url}})
    .then(res =>{
      console.log('Success!')
    })
    .catch(err => {
      console.log(err)
    })

    setProj_name('')
    setDescription('')
    setGh_link('')
    setLive_link('')
    setImage_url('')
  }


  return (
    <div>

      <h2>Add a Project</h2>

      <form onSubmit = {submitForm}>

      <label>
        Project Name:
        <input
          value = {proj_name}
          onChange = {({target}) => setProj_name(target.value)}
          />
        </label>
      <label>Description</label>
      <input
        value = {description}
        onChange = {({target}) => setDescription(target.value)}
        />
        <label>GitHub Link</label>
      <input
        value = {gh_link}
        onChange = {({target}) => setGh_link(target.value)}
        />
        <label>Live Link</label>
      <input
        value = {live_link}
        onChange = {({target}) => setLive_link(target.value)}
        />
        <label>Preview Image</label>
      <input
        value = {image_url}
        onChange = {({target}) => setImage_url(target.value)}
        />
        <button type = 'submit'>Submit</button>
      </form>
    </div>
  )
  }

export default AddForm
