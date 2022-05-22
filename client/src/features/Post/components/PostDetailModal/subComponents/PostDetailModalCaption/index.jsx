import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
// import PropTypes from 'prop-types';

const PostDetailModalCaption = (props) => {
   return (
      <VStack w='full' alignItems='start'>
         <HStack spacing='1' w='full'>
            <Text>Like by</Text>
            <Text fontWeight='bold'>thanhnguyen662</Text>
            <Text>and</Text>
            <Text fontWeight='bold'>231 others</Text>
         </HStack>
         <Text>
            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>
               thanhnguyen662
            </span>
            <span>
               Nulla proident sit et enim. Qui sint laborum tempor sunt ad nisi
               aliqua nulla non. aliqua nulla non
            </span>
         </Text>
         <Text color='gray.500' fontSize='14px'>
            3 hours ago
         </Text>
      </VStack>
   );
};

PostDetailModalCaption.propTypes = {};

export default PostDetailModalCaption;
