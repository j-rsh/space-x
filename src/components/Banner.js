import React from 'react';
import {Image,ResourceList, ResourceItem}   from '@shopify/polaris';
import {useQuery} from '@apollo/client';
import {GET_LAUNCH} from '../graphQl/query'

const Banner = () => {

    const {loading , data , error} = useQuery(GET_LAUNCH);
    console.log(data)

    const LanchMarkUp = (
        loading ? <p>loading</p>:
        <ResourceList
        resourceName={{singular: 'launche', plural: 'launches'}}
        items={data.launches} 
        renderItem={(item) => {
          const flickr_images = item.links.flickr_images[0];
          const {mission_name} = item;  
          return (
            <ResourceItem>
                  <Image  style={{width : "100%" }}
                source={flickr_images}
                alt="sth"
                />
                <h1>{mission_name}</h1>
            </ResourceItem>
          );
        }}
      />
    );
    return (
        <div>
            {LanchMarkUp}
        </div>
    );
};

export default Banner;