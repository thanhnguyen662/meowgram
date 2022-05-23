import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import MeowAvatar from '../../../../../../global/components/MeowAvatar';
// import PropTypes from 'prop-types';

const PostCreateModalHeader = (props) => {
   return (
      <HStack spacing='5' w='full'>
         <Box>
            <MeowAvatar
               outline={true}
               width='60px'
               height='60px'
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rJMMEpWQ0NPwk7qTq3Zmug9Rmmm2iREdVg&usqp=CAU'
            />
         </Box>
         <VStack lineHeight='1' alignItems='start' spacing='2'>
            <Text fontWeight='bold' fontSize='19px'>
               theweeknd
            </Text>
            <Text>Nisicommodo.</Text>
         </VStack>
      </HStack>
   );
};

PostCreateModalHeader.propTypes = {};

export default PostCreateModalHeader;
