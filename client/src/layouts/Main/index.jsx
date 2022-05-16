import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../features/Home/pages/Sidebar';
import Header from '../../global/components/Header';
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
               <GridItem colSpan={5}></GridItem>
            </Grid>
         </ContentContainer>
      </Box>
   );
};

export default Main;
