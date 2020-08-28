import React, {useState} from 'react'
import { gql, useQuery } from '@apollo/client'

import AddForm from './AddForm'


const GET_ALL_PROJECTS = gql `
query projects {
    projects {
    _id
    proj_name
    description
    gh_link
    live_link
    image_url
  }
}`


const DisplayProjects = () => {
  // const [projectsList, setProjectsList] = useState([])
  const {loading, error, data} = useQuery(GET_ALL_PROJECTS)
  if(loading) return '...Loading'
  if(error) return `Error: ${error.message}`
  // setProjectsList(data.projects)
  // console.log(projectsList);
  return (
    <div>
    <h1>Hello from Projects</h1>
    <h2>Projects List:</h2>
    <h4>Click Title to Edit</h4>
      {data.projects.map(p => {
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
    })
     }
     <AddForm />
    </div>
  )
}

export default DisplayProjects
