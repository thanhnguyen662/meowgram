import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ContentContainer from '../ContentContainer';

const Main = () => {
   return (
      <Box>
         <Box position='sticky' top='0px' zIndex={4}>
            <Header />
         </Box>
         <ContentContainer>
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
         </ContentContainer>
      </Box>
   );
};

export default Main;
