import React from 'react';
import {useQuery} from '@apollo/client';
import {Layout, Page }   from '@shopify/polaris';
import Banner from './Banner';


const Home = () => {
   
    return (
       
        <Page >
        <Layout>
          <Layout.Section><Banner/> </Layout.Section>
          <Layout.Section>{/* Wide page content */}</Layout.Section>
          <Layout.Section>{/* Page footer content */}</Layout.Section>
        </Layout>
      </Page>
    );
};

export default Home;