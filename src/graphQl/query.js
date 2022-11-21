import {gql} from '@apollo/client';
const GET_LAUNCH = gql`
    query{
        launches(limit: 3) {
    mission_name
    links {
      flickr_images
    }
    id
  }
}
`

const GET_ROCKETS = gql`
    query{
        rockets {
    name
    wikipedia
  }
}
`
export {GET_LAUNCH , GET_ROCKETS} 