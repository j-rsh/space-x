import {TopBar, Loading,Navigation, Frame, Avatar,ResourceList, ResourceItem , Card ,Text,Page , AppProvider
} from '@shopify/polaris';
import {HomeMinor,OrdersMinor, ConversationMinor,ArrowLeftMinor} from '@shopify/polaris-icons';
import {useState, useCallback} from 'react';
import {useQuery} from '@apollo/client';
import {GET_LAUNCH} from '../graphQl/query';

function Landing() {
    const {loading , data } = useQuery(GET_LAUNCH,{variables:{limit:7}});

    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    [],
  );



  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );
  
  const logo = {
    width: 124,
    topBarSource:"https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png",
    url:"https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png",
    accessibilityLabel: 'Jaded Pixel',
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{content: 'Back to Shopify', icon: ArrowLeftMinor}],
        },
        {
          items: [{content: 'Community forums'}],
        },
      ]}
    //   name="spaceX"
      detail="SpaceX"
      initials="S"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Text variant="bodySm" as="span" visuallyHidden>
            Secondary menu
          </Text>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [{content: 'Community forums'}],
        },
      ]}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      
      onNavigationToggle={toggleMobileNavigationActive}

    />
  );

  const navigationMarkUp = (
    <Navigation location="/">
    <Navigation.Section
      items={[
        {
          url: '/path/to/place',
          label: 'Home',
          icon: HomeMinor,
        },
        {
          url: '/path/to/place',
          label: 'dashboard',
          icon: OrdersMinor,
        }
      ]}
      action={{
        icon: ConversationMinor,
        accessibilityLabel: 'Contact support',
      }}
    />
  </Navigation>  
  )
  const actualPageMarkup =(
    loading ? <Loading/> :
    <Page title="SpaceX" >
        <Card title=" Lanches" sectioned>
        <ResourceList
        resourceName={{singular: 'launche', plural: 'launches'}}
        items={data.launches} 
        renderItem={(item) => {
        const flickr_images = item.links.flickr_images[0];
        const {mission_name ,launch_date_utc} = item;  
        return (
            <ResourceItem
            media={
            <Avatar launche size="medium"  source={flickr_images}/>}
            >
            <Text variant="bodyMd" fontWeight="bold" as="h3">
                {mission_name}
            </Text>
            <p>Launch-Date : {launch_date_utc}</p>
                
            </ResourceItem>
        );
        }}
    />
    </Card>
       
    </Page>
  )

  return (
    <div style={{height: '250px'}}>
     <AppProvider  >
      <Frame navigation={navigationMarkUp} topBar={topBarMarkup} logo={logo} 
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive} >
        {actualPageMarkup}
      </Frame>
      </AppProvider>
    </div>
  );
}
export default Landing