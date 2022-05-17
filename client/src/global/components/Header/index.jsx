import { Center, Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextLogo } from '../Logo';
import Search from '../Search';

const Header = () => {
   const navigate = useNavigate();

   const onClickLogo = () => {
      navigate('/home');
   };

   return (
      <Center background='white' h='20'>
         <Container maxW='1300px'>
            <Grid templateColumns='repeat(20, 1fr)' gap={{ base: 0, md: 6 }}>
               <GridItem
                  w='100%'
                  h='10'
                  colSpan={{ base: 0, md: 4 }}
                  display={{ base: 'none', md: 'block' }}
                  onClick={onClickLogo}
               >
                  <TextLogo />
               </GridItem>

               <GridItem colSpan={{ base: 20, md: 11 }}>
                  <Search />
               </GridItem>
            </Grid>
         </Container>
      </Center>
   );
};

export default Header;
