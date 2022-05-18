import { VStack } from '@chakra-ui/react';
import React from 'react';
import PostCardDescription from './subComponents/PostCardDescription';
import PostCardHeader from './subComponents/PostCardHeader';
import PostCardImage from './subComponents/PostCardImage';
import PostCardInput from './subComponents/PostCardInput';
import PostCardToolbar from './subComponents/PostCardToolbar';

const PostCard = () => {
   return (
      <>
         <VStack w='full' spacing='20px'>
            <PostCardHeader />
            <PostCardImage />
            <PostCardToolbar />
            <PostCardDescription />
            <PostCardInput />
         </VStack>
      </>
   );
};

export default PostCard;
