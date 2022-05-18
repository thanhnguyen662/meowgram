import { VStack } from '@chakra-ui/react';
import React from 'react';
import SidebarUser from './subComponents/SidebarUser';
import SidebarMenu from './subComponents/SidebarMenu';
import SidebarCopyRight from './subComponents/SidebarCopyright';

const Sidebar = () => {
   return (
      <VStack spacing='40px' w='full'>
         <SidebarUser />
         <SidebarMenu />
         <SidebarCopyRight />
      </VStack>
   );
};

export default Sidebar;
