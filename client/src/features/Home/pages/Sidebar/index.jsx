import { VStack } from '@chakra-ui/react';
import React from 'react';
import SidebarMenu from '../../components/SidebarMenu';
import SidebarUser from '../../components/SidebarUser';

const Sidebar = () => {
   return (
      <VStack spacing='40px' w='full'>
         <SidebarUser />
         <SidebarMenu />
      </VStack>
   );
};

export default Sidebar;
