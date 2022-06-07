import { HStack, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import MeowAvatar from '../../../../../../global/components/MeowAvatar';
import PostCardMenu from '../PostCardMenu';

PostCardHeader.propTypes = {};

function PostCardHeader(props) {
   return (
      <HStack spacing='20px' w='full'>
         <MeowAvatar
            outline={true}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rJMMEpWQ0NPwk7qTq3Zmug9Rmmm2iREdVg&usqp=CAU'
            width='50px'
            height='50px'
         />
         <Text fontWeight='bold' fontSize='18px'>
            theweeknd
         </Text>
         <Text fontWeight='bold' fontSize='15px' color='gray.500'>
            Flowing
         </Text>
         <Spacer />
         <PostCardMenu fontSize='26px' />
      </HStack>
   );
}

export default PostCardHeader;
