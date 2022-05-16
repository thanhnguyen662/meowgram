import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../components/Sidebar';

const HomePage = () => {
   return (
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
         <GridItem w='100%' h='10' colSpan={1}>
            <Sidebar />
         </GridItem>

         <GridItem colSpan={2}>
            <Text>Content</Text>
         </GridItem>

         <GridItem w='100%' h='10' colSpan={1}>
            <Text>Suggest</Text>
         </GridItem>
      </Grid>
   );
};

export default HomePage;
