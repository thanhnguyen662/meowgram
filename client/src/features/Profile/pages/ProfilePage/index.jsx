import { VStack } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileTabBar from '../../components/ProfileTabBar';

const ProfileMainLayout = () => {
   return (
      <VStack w='full' alignItems='start'>
         <ProfileHeader />
         <ProfileTabBar />
         <Outlet />
      </VStack>
   );
};

export default ProfileMainLayout;
