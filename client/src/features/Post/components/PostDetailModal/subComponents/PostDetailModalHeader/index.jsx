import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import MeowAvatar from '../../../../../../global/components/MeowAvatar';
import PostCardMenu from '../../../PostCard/subComponents/PostCardMenu';
// import PropTypes from 'prop-types';

const PostDetailModalHeader = (props) => {
   return (
      <HStack w='full' spacing={5}>
         <Box>
            <MeowAvatar
               outline={true}
               width='48px'
               height='48px'
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rJMMEpWQ0NPwk7qTq3Zmug9Rmmm2iREdVg&usqp=CAU'
            />
         </Box>
         <VStack w='full' justifyContent='start' alignItems='start' spacing={0}>
            <Text fontWeight='bold'>theweeknd</Text>
            <Text>Danang, Vietnam</Text>
         </VStack>
         <PostCardMenu fontSize='26px' />
      </HStack>
   );
};

PostDetailModalHeader.propTypes = {};

export default PostDetailModalHeader;
