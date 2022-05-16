import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../global/components/Header';
import Sidebar from '../../global/components/Sidebar';
import ContentContainer from '../ContentContainer';

const Main = () => {
   return (
      <Box>
         <Header />
         <ContentContainer>
            <Grid templateColumns='repeat(20, 1fr)' gap={6}>
               <GridItem w='100%' colSpan={4}>
                  <Sidebar />
               </GridItem>

               <GridItem colSpan={11}>
                  <Outlet />
               </GridItem>
            </Grid>
         </ContentContainer>
      </Box>
   );
};

export default Main;
