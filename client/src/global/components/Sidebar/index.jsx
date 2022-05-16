import { VStack } from '@chakra-ui/react';
import React from 'react';
import SidebarUser from './subComponents/SidebarUser';
import SidebarMenu from './subComponents/SidebarMenu';

const Sidebar = () => {
   return (
      <VStack spacing='40px' w='full'>
         <SidebarUser />
         <SidebarMenu />
      </VStack>
   );
};

export default Sidebar;
