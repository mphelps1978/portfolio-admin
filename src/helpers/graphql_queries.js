const getAllProjects = {
  query: `
  query {
    projects {
      _id
      proj_name
      description
      gh_link
      live_link
      image_url
    }
  }
`
 }


module.exports = {
   getAllProjects
 }