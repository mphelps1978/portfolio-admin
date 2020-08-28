import React from 'react'

const DisplayProjects = (props) => {
  console.log(props)
  return (
    <div>
    <h1>Hello from Projects</h1>
    <h2>Projects List:</h2>
    <h4>Click Title to Edit</h4>
     {props.projects.map(p => {
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
    </div>
  )
}

export default DisplayProjects
