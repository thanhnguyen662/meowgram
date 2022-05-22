import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import ContentContainer from '../ContentContainer';

const Main = () => {
   return (
      <Box>
         <Box position='sticky' top='0px' zIndex={4}>
            <Header />
         </Box>
         <ContentContainer>
            <Outlet />
         </ContentContainer>
      </Box>
   );
};

export default Main;
