import React, { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { GET_ALL_PROJECTS, REMOVE_PROJECT } from '../helpers/queries'

import AddForm from './AddForm'


const DisplayProjects = () => {
  const [deleteItem] = useMutation(REMOVE_PROJECT)
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS)

const onDelete = (id, e) => {
  e.preventDefault()
  deleteItem({
    variables: {id},
    refetchQueries: [{query: GET_ALL_PROJECTS}]
  })
}






  if (loading) return '...Loading'
  if (error) return `Error: ${error.message}`
  return (
    <div>
      <h1>Hello from Projects</h1>
      <h2>Projects List:</h2>
      <h4>Click Title to Edit</h4>
      {data.projects.map(p => {
        return (
          <div key={p._id}>
            <p>{p.proj_name}</p>
            <p>{p.description}</p>
            <p>{p.gh_link}</p>
            <p>{p.live_link}</p>
            <p>{p.image_url}</p>
            <DeleteIcon onClick = {e => onDelete(p._id, e)} />
            <EditIcon color='primary' fontSize='large' />
            <hr />
          </div>
        )
      })
      }
      <AddForm />
    </div>
  )
}

export default DisplayProjects
