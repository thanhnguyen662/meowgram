import { Icon } from '@chakra-ui/icons';
import { Box, Divider, Flex, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
   BsChat,
   BsCollection,
   BsCompass,
   BsCompassFill,
   BsHouseDoor,
   BsHouseDoorFill,
   BsPerson,
   BsPersonFill,
} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { authData } from '../../../../../features/Auth/authSlice';

const SidebarMenu = () => {
   const location = useLocation();
   const { userData } = useSelector(authData);

   const isActive = (menuItem) => {
      return location.pathname.split('/')[1] === menuItem.pathname;
   };

   const menu1 = [
      {
         title: 'Home',
         icon: <Icon as={BsHouseDoor} />,
         activeIcon: <Icon as={BsHouseDoorFill} />,
         pathname: '',
         to: '/',
      },
      {
         title: 'Explorer',
         icon: <Icon as={BsCompass} />,
         activeIcon: <Icon as={BsCompassFill} />,
         pathname: 'explorer',
         to: '/explorer',
      },
      {
         title: 'Profile',
         icon: <Icon as={BsPerson} />,
         activeIcon: <Icon as={BsPersonFill} />,
         pathname: 'profile',
         to: `/profile/${userData.email}/posts`,
      },
   ];

   const menu2 = [
      {
         title: 'Direct',
         icon: <Icon as={BsChat} />,
      },
      {
         title: 'Activity',
         icon: <Icon as={BsCollection} />,
      },
   ];

   return (
      <VStack w='full' spacing='25px'>
         {menu1.map((item) => (
            <Link to={item.to} style={{ width: '100%' }} key={item.title}>
               <HStack
                  spacing='20px'
                  w='full'
                  justifyContent='start'
                  alignItems='center'
                  cursor='pointer'
               >
                  <Flex fontSize='24px' alignItems='center'>
                     {isActive(item) ? item.activeIcon : item.icon}
                  </Flex>
                  <Box
                     fontSize='17px'
                     pt='1'
                     fontWeight={isActive(item) ? 'bold' : 'normal'}
                  >
                     {item.title}
                  </Box>
               </HStack>
            </Link>
         ))}
         <Divider />
         {menu2.map((item) => (
            <HStack
               spacing='20px'
               key={item.title}
               w='full'
               justifyContent='start'
               alignItems='center'
               cursor='pointer'
            >
               <Flex fontSize='24px' alignItems='center'>
                  {item.icon}
               </Flex>
               <Box fontSize='17px' pt='1'>
                  {item.title}
               </Box>
            </HStack>
         ))}
      </VStack>
   );
};

export default SidebarMenu;
