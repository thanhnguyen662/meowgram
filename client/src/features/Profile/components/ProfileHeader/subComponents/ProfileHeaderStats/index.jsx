import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ProfileHeaderStats = () => {
   return (
      <HStack
         h='full'
         alignItems='center'
         justifyContent='center'
         spacing={{ md: '40px', base: '22px' }}
      >
         <VStack>
            <Text fontWeight='bold' fontSize={{ base: '20', md: '23' }}>
               235
            </Text>
            <Text fontSize={{ base: '15', md: '17' }}>Post</Text>
         </VStack>
         <VStack>
            <Text fontWeight='bold' fontSize={{ base: '20', md: '23' }}>
               15.2M
            </Text>
            <Text fontSize={{ base: '15', md: '17' }}>Follower</Text>
         </VStack>
         <VStack>
            <Text fontWeight='bold' fontSize={{ base: '20', md: '23' }}>
               452
            </Text>
            <Text fontSize={{ base: '15', md: '17' }}>Following</Text>
         </VStack>
      </HStack>
   );
};

export default ProfileHeaderStats;
