import {TopBar, Thumbnail,ActionList, Icon, Frame, Text ,Link ,ResourceList, ResourceItem , Inline , Stack, Banner }   from '@shopify/polaris';
import { useQuery} from '@apollo/client';
import {GET_ROCKETS} from '../graphQl/query'



function Header() {
    const {loading , data , error} = useQuery(GET_ROCKETS);

  const linkMarkUp = (
    loading ? <p>loading</p>:
    <ResourceList
    resourceName={{singular: 'rocket', plural: 'rockets'}}
    items={data.rockets}
    renderItem={(item) => {
      const {name , wikipedia} = item;
      return (
        <ResourceItem  >
            <Link style={{display:" inline-flex"}} url={wikipedia}>{name}</Link>
      
       
        </ResourceItem>
      );
    }}
  />

  );

  const topBarMarkup = (
    <TopBar 
    secondaryMenu={linkMarkUp}
    />
  );

  return (
    <div style={{height: '250px'}}>
      <Frame  topBar={topBarMarkup} />

    </div>
  );
}
export default Header