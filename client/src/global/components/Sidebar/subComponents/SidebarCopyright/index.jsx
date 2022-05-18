import { Flex, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsDot } from 'react-icons/bs';

const SidebarCopyRight = () => {
   return (
      <VStack w='full' alignItems='start' color='gray.500' spacing='15px'>
         <Flex w='full' wrap='wrap' gap='5px' alignItems='center' fontSize='15'>
            <Text>About</Text>
            <Icon as={BsDot} alignItems='center' />
            <Text>Help</Text>
            <Icon as={BsDot} alignItems='center' />
            <Text>Press</Text>
            <Icon as={BsDot} alignItems='center' />
            <Text>API</Text>
            <Icon as={BsDot} alignItems='center' />
            <Text>Jobs</Text>
            <Icon as={BsDot} alignItems='center' />
            <Text>Privacy</Text>
            <Icon as={BsDot} alignItems='center' />
            <Text>Terms</Text>
            <Icon as={BsDot} alignItems='center' />
            <Text>Hashtags</Text>
            <Icon as={BsDot} alignItems='center' />
            <Text>Top Accounts</Text>
         </Flex>
         <Text fontSize='16'>&copy; Instagram by Alex Kaste</Text>
      </VStack>
   );
};

export default SidebarCopyRight;
