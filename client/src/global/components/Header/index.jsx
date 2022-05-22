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
   useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authData } from '../../../features/Auth/authSlice';
import PostCreateModal from '../../../features/Post/components/PostCreateModal';
import { TextLogo } from '../Logo';
import MeowAvatar from '../MeowAvatar';
import Search from '../Search';

const Header = () => {
   const navigate = useNavigate();
   const { userData } = useSelector(authData);
   const breakpoint = useBreakpointValue({ base: 'mobile', md: 'desktop' });

   const {
      isOpen: isOpenCreatePostModal,
      onOpen: onOpenCreatePostModal,
      onClose: onCloseCreatePostModal,
   } = useDisclosure();

   const onClickLogo = () => {
      navigate('/');
   };

   const onClickCreatePost = () => {
      onOpenCreatePostModal();
   };

   return (
      <>
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

                  <GridItem colSpan={5} display={{ base: 'none', md: 'block' }}>
                     <Box w='full' display='flex' justifyContent='end'>
                        <Button
                           leftIcon={<Icon as={BsPlus} />}
                           variant='outline'
                           colorScheme='blue'
                           onClick={onClickCreatePost}
                        >
                           Post it
                        </Button>
                     </Box>
                  </GridItem>
               </Grid>
            </Container>
         </Center>
         <PostCreateModal
            isOpen={isOpenCreatePostModal}
            onClose={onCloseCreatePostModal}
         />
      </>
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
