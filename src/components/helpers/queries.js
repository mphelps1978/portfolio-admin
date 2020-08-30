import { gql } from '@apollo/client'


export const GET_ALL_PROJECTS = gql `
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

export const ADD_PROJECT = gql `
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

export const REMOVE_PROJECT = gql`
mutation deleteProject ($id: ID!) {
  deleteProject(_id: $id) {
    _id
    proj_name
  }
}
`

export const EDIT_PROJECT = gql`
mutation editProjectItem($id: ID, $proj_name: String!, $description: String!, $gh_link: String!, $live_link: String!, $image_url: String!){
  editProjectItem(_id: $id,
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