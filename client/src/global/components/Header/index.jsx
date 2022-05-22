import {
   Box,
   Button,
   Center,
   Container,
   Flex,
   Grid,
   GridItem,
   Icon,
   Menu,
   MenuButton,
   MenuItem,
   MenuList,
   useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextLogo } from '../Logo';
import MeowAvatar from '../MeowAvatar';
import Search from '../Search';
import { useSelector } from 'react-redux';
import { authData } from '../../../features/Auth/authSlice';
import { BsPlus } from 'react-icons/bs';

const Header = () => {
   const navigate = useNavigate();
   const breakpoint = useBreakpointValue({ base: 'mobile', md: 'desktop' });
   const { userData } = useSelector(authData);

   const onClickLogo = () => {
      navigate('/');
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
                  {breakpoint === 'desktop' ? (
                     <Search />
                  ) : (
                     <HeaderMobile navigate={navigate} userData={userData} />
                  )}
               </GridItem>

               <GridItem colSpan={5}>
                  <Box w='full' display='flex' justifyContent='end'>
                     <Button
                        leftIcon={<Icon as={BsPlus} />}
                        variant='outline'
                        colorScheme='blue'
                     >
                        Post it
                     </Button>
                  </Box>
               </GridItem>
            </Grid>
         </Container>
      </Center>
   );
};

const HeaderMobile = (props) => {
   const { navigate, userData } = props;

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
               <MenuItem onClick={() => navigate(`/`)}>Home</MenuItem>
               <MenuItem
                  onClick={() => navigate(`/profile/${userData.email}/posts`)}
               >
                  Profile
               </MenuItem>
            </MenuList>
         </Menu>
      </Flex>
   );
};

export default Header;
