import { Box, GridItem, Grid } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const WithSidebar = () => {
   return (
      <Grid templateColumns='repeat(20, 1fr)' gap={{ base: 0, md: 6 }}>
         <GridItem w='100%' colSpan={4}>
            <Box
               position='sticky'
               top='96px'
               zIndex={4}
               display={{ base: 'none', md: 'block' }}
            >
               <Sidebar />
            </Box>
         </GridItem>

         <GridItem colSpan={{ base: 20, md: 16 }} mb='20px'>
            <Outlet />
         </GridItem>
      </Grid>
   );
};

export default WithSidebar;
