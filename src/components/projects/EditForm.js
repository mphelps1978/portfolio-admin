import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_ALL_PROJECTS, EDIT_PROJECT } from '../helpers/queries'


const AddForm = (props) => {
  console.log(props.id)
  const [createProjectItem] = useMutation(EDIT_PROJECT)
  const [details, setDetails] = useState({
    proj_name: props.name,
    description: props.desc,
    gh_link: props.gh,
    live_link: props.live,
    image_url: props.img
  })

  const id = props.id
  const {proj_name, description, gh_link, live_link, image_url} = details

  const submitForm = e => {
    e.preventDefault()
    createProjectItem({
      variables: { id, proj_name, description, gh_link, live_link, image_url},
      refetchQueries: [{query: GET_ALL_PROJECTS}]


    })

    setDetails({
      proj_name: '',
      description: '',
      gh_link: '',
      live_link: '',
      image_url: ''
  })
    props.close()
}

  const changeDetails = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div key = {props.id}>

      <h2>Edit {props.name}</h2>

      <form onSubmit = {submitForm}>

      <label>
        Project Name:
        <input
          name = 'proj_name'
          value = {details.proj_name}
          onChange = {changeDetails}
          />
        </label>
      <label>Description</label>
      <input
        name = 'description'
        value = {details.description}
        onChange = {changeDetails}
        />
        <label>GitHub Link</label>
      <input
        name  = 'gh_link'
        value = {details.gh_link}
        onChange = {changeDetails}
        />
        <label>Live Link</label>
      <input
        name = 'live_link'
        value = {details.live_link}
        onChange = {changeDetails}
        />
        <label>Preview Image</label>
      <input
        name = 'image_url'
        value = {details.image_url}
        onChange = {changeDetails}
        />
        <button type = 'submit'>Submit</button>
      </form>
    </div>
  )
  }

export default AddForm
