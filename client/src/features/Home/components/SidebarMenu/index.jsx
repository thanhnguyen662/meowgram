import { Icon } from '@chakra-ui/icons';
import { Box, Divider, Flex, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
   BsPerson,
   BsPersonFill,
   BsChat,
   BsCollection,
   BsCompass,
   BsCompassFill,
   BsHouseDoor,
   BsHouseDoorFill,
} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { authData } from '../../../Auth/authSlice';

const SidebarMenu = () => {
   const navigate = useNavigate();
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
         pathname: 'home',
         to: '/home',
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
         to: `/profile/${userData.email}`,
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
            <HStack
               spacing='20px'
               key={item.title}
               w='full'
               justifyContent='start'
               alignItems='center'
               cursor='pointer'
               onClick={() => navigate(item.to)}
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
