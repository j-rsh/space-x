import {gql} from '@apollo/client';
const GET_LAUNCH = gql`
    query GET_LIMIT($limit:Int){
        launches(limit: $limit) {
    mission_name
    launch_date_utc
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
const GET_SOCIAL_MEDIA = gql`
    query{
      company {
    links {
      website
      twitter
      flickr
      elon_twitter
    }
  }
    }

`

export {GET_LAUNCH , GET_ROCKETS ,GET_SOCIAL_MEDIA } 