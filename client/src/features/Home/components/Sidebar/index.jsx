import {
   Avatar,
   Box,
   Flex,
   Heading,
   Icon,
   Menu,
   MenuButton,
   MenuItem,
   MenuList,
   Text,
} from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { BsFillReplyFill, BsPersonFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../firebase';
import { authData } from '../../../Auth/authSlice';
import { useSelector } from 'react-redux';

const Sidebar = () => {
   const navigate = useNavigate();
   const { userData } = useSelector(authData);

   const onClickProfile = () => {
      navigate(`/profile/${userData.email}`);
   };

   const onClickLogout = async () => {
      const logoutResponse = await logout();
      if (logoutResponse.message === 'logout_success') {
         localStorage.setItem('providerData', false);
         return (window.location = '/home');
      }
   };

   return (
      <Flex
         gap='15px'
         justifyContent='center'
         alignItems='center'
         w='full'
         h='full'
      >
         <Flex>
            <Avatar
               w='45px'
               h='45px'
               src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'
            />
         </Flex>
         <Flex flex='1' flexDirection='column'>
            <Text fontSize='15px' color='mainFont' fontWeight='bold'>
               {userData.name}
            </Text>
            <Text fontSize='13px' color='subFont'>
               {userData.email}
            </Text>
         </Flex>
         <Flex flex='1' justifyContent='center' alignItems='center'>
            <Menu isLazy>
               <MenuButton>
                  <ChevronDownIcon cursor='pointer' fontSize='25px' />
               </MenuButton>
               <MenuList>
                  <MenuItem
                     icon={<Icon as={BsPersonFill} />}
                     onClick={onClickProfile}
                  >
                     Profile
                  </MenuItem>
                  <MenuItem
                     icon={<Icon as={BsFillReplyFill} />}
                     onClick={onClickLogout}
                  >
                     Logout
                  </MenuItem>
               </MenuList>
            </Menu>
         </Flex>
      </Flex>
   );
};

export default Sidebar;
