import { Tab, TabList, Tabs } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ProfileTabBar = () => {
   const tabs = [
      {
         index: 0,
         name: 'Posts',
         pathName: 'posts',
      },
      {
         index: 1,
         name: 'IGTV',
         pathName: 'igtv',
      },
      {
         index: 2,
         name: 'Tagged',
         pathName: 'tagged',
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

   return (
      <Tabs
         onChange={handleTabsChange}
         value={tabIndex}
         defaultIndex={Number(foundIndexByTabName)}
      >
         <TabList>
            {tabs.map((tab) => (
               <Tab key={tab.index}>{tab.name}</Tab>
            ))}
         </TabList>
      </Tabs>
   );
};

export default ProfileTabBar;
