import {
   Button,
   Center,
   Container,
   Flex,
   Grid,
   GridItem,
   HStack,
   IconButton,
   Menu,
   MenuButton,
   MenuItem,
   MenuList,
   useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { BsList } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { TextLogo } from '../Logo';
import MeowAvatar from '../MeowAvatar';
import Search from '../Search';

const Header = () => {
   const navigate = useNavigate();
   const breakpoint = useBreakpointValue({ base: 'mobile', md: 'desktop' });

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
                  {breakpoint === 'desktop' ? <Search /> : <HeaderMobile />}
               </GridItem>
            </Grid>
         </Container>
      </Center>
   );
};

const HeaderMobile = () => {
   return (
      <Flex gap='10px'>
         <Search />
         <Menu>
            <MenuButton>
               <MeowAvatar
                  outline={true}
                  width='41px'
                  height='41px'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rJMMEpWQ0NPwk7qTq3Zmug9Rmmm2iREdVg&usqp=CAU'
               />
            </MenuButton>
            <MenuList>
               <MenuItem>New Tab</MenuItem>
            </MenuList>
         </Menu>
      </Flex>
   );
};

export default Header;
