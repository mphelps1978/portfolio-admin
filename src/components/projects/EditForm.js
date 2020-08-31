import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { EDIT_PROJECT, GET_ALL_PROJECTS, GET_PROJECT_BY_ID} from '../helpers/queries'




const EditForm = (props) => {
  const params = useParams()
  const id = params.toString()
  console.log(id);
  const [editProjectItem] = useMutation(EDIT_PROJECT)
  const {loading, data, error} = useQuery(GET_PROJECT_BY_ID, {variables: {id},})
  const [details, setDetails] = useState({})
  const [formEntry, setFormEntry] = useState({
    _id: id,
    proj_name: '',
    description: '',
    gh_link: '',
    live_link: '',
    image_url: '',
  })






  const {_id, proj_name, description, gh_link, live_link, image_url} = formEntry

  const submitForm = e => {
    e.preventDefault()

    editProjectItem({
      variables: { id, proj_name, description, gh_link, live_link, image_url},
      refetchQueries: [{query: GET_ALL_PROJECTS}]
    })
    props.close()
  }


  const changeDetails = (e) => {
    e.preventDefault()
    setFormEntry({
      ...formEntry,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=> {
    if(data){
      setDetails(data.projectById)
    }
  },[data])


  if (loading) return '...Loading';
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;
  return (
    <div key = {_id}>

    <h2>Edit {proj_name}</h2>

    <form onSubmit = {submitForm} >

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


export default EditForm
