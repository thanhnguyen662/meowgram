import {
   Box,
   Grid,
   GridItem,
   HStack,
   Tab,
   TabList,
   Tabs,
   Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
   BsGridFill,
   BsGrid,
   BsTvFill,
   BsTv,
   BsTagFill,
   BsTag,
} from 'react-icons/bs';

const ProfileTabBar = () => {
   const tabs = [
      {
         index: 0,
         name: 'Posts',
         pathName: 'posts',
         icon: <BsGrid />,
         iconFill: <BsGridFill />,
      },
      {
         index: 1,
         name: 'IGTV',
         pathName: 'igtv',
         icon: <BsTv />,
         iconFill: <BsTvFill />,
      },
      {
         index: 2,
         name: 'Tagged',
         pathName: 'tagged',
         icon: <BsTag />,
         iconFill: <BsTagFill />,
      },
   ];

   const navigate = useNavigate();
   const location = useLocation();
   const { email } = useParams();

   const [tabIndex, setTabIndex] = useState();

   const handleTabsChange = (index) => {
      const foundTabByIndex = tabs.find((t) => t.index === index).pathName;
      navigate(`/profile/${email}/${foundTabByIndex}`);
      setTabIndex(parseInt(index));
   };

   const foundIndexByTabName = tabs.find(
      (t) => t.pathName === location.pathname.split('/')[3]
   ).index;

   const isTagActive = (tab) => {
      return parseInt(foundIndexByTabName) === tab.index;
   };

   return (
      <Grid
         templateColumns='repeat(20, 1fr)'
         w='full'
         borderBottom='2px solid #EDF2F7'
      >
         <GridItem colStart={{ base: 1, md: 4 }} colEnd={{ base: 20, md: 20 }}>
            <Tabs
               isLazy
               onChange={handleTabsChange}
               value={tabIndex}
               defaultIndex={Number(foundIndexByTabName)}
               w='full'
               variant='unstyled'
            >
               <TabList>
                  {tabs.map((tab) => (
                     <Tab
                        key={tab.index}
                        _selected={{
                           borderBottom: '2px solid #3182CE',
                           color: '#3182CE',
                        }}
                     >
                        <HStack spacing='12px'>
                           <Box fontSize='22px'>
                              {isTagActive(tab) ? tab.iconFill : tab.icon}
                           </Box>
                           <Text
                              fontSize='20px'
                              style={{
                                 fontWeight: isTagActive(tab)
                                    ? 'bold'
                                    : 'normal',
                              }}
                           >
                              {tab.name}
                           </Text>
                        </HStack>
                     </Tab>
                  ))}
               </TabList>
            </Tabs>
         </GridItem>
      </Grid>
   );
};

export default ProfileTabBar;
