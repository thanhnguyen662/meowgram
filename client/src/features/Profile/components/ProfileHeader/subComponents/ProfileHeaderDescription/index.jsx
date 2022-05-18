import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ProfileHeaderDescription = () => {
   return (
      <VStack w='full' alignItems='start'>
         <Heading fontSize={{ base: '18', md: '20' }}>thanhnguyen662</Heading>
         <Text fontSize={{ base: '15', md: '17' }}>
            Nulla proident sit et enim. Qui sint laborum tempor sunt ad nisi
            aliqua nulla non. aliqua nulla non
         </Text>
         <Text fontSize={{ base: '15', md: '17' }}>
            Tempor tempor eu minim ea aliquip quis sit ex.
         </Text>
      </VStack>
   );
};

export default ProfileHeaderDescription;
