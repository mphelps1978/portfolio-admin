import { gql } from '@apollo/client'


const GET_ALL_PROJECTS = gql `
query projects {
  _id
  proj_name
  description
  gh_link
  live_link
  image_url
}`


 const newProject = {
   query: `
   mutation {


   }`
 }


module.exports = {
   GET_ALL_PROJECTS
 }