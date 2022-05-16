import {
   Box,
   Button,
   Center,
   Container,
   Grid,
   GridItem,
   HStack,
   Text,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authData } from '../../../features/Auth/authSlice';
import useUserLogged from '../../../hooks/useUserLogged';
import Search from '../Search';
import { TextLogo } from '../Logo';

const Header = () => {
   const { userData } = useSelector(authData);
   const userLogged = useUserLogged();
   const navigate = useNavigate();

   const onClickLogo = () => {
      navigate('/home');
   };

   return (
      <Center background='white' h='20'>
         <Container maxW='1300px'>
            <Grid templateColumns='repeat(20, 1fr)' gap={6}>
               <GridItem w='100%' h='10' colSpan={4}>
                  <HStack
                     w='full'
                     h='full'
                     justifyContent='left'
                     alignItems='center'
                     spacing='60px'
                  >
                     <Text
                        onClick={onClickLogo}
                        fontSize='2xl'
                        fontWeight='bold'
                        justifyContent='left'
                        cursor='pointer'
                        transition='0.2s ease-out'
                     >
                        <TextLogo />
                     </Text>
                  </HStack>
               </GridItem>

               <GridItem colSpan={10}>
                  <Search />
               </GridItem>

               <GridItem w='100%' h='10' colStart={18} colEnd={20}>
                  {userLogged ? (
                     <UserLogin navigate={navigate} userData={userData} />
                  ) : (
                     <UserNotLogin navigate={navigate} />
                  )}
               </GridItem>
            </Grid>
         </Container>
      </Center>
   );
};

const UserLogin = (props) => {
   return (
      <Box textAlign='end'>
         <Button>New Post</Button>
      </Box>
   );
};

const UserNotLogin = (props) => {
   const { navigate } = props;

   const onClickButton = (button) => {
      navigate(`/auth/${button}`);
   };

   return (
      <HStack justifyContent='end' spacing='10px'>
         <Button onClick={() => onClickButton('register')}>Register</Button>
         <Button onClick={() => onClickButton('login')} colorScheme='blue'>
            Login
         </Button>
      </HStack>
   );
};

export default Header;
