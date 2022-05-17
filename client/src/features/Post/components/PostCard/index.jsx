import { Image, VStack } from '@chakra-ui/react';
import React from 'react';
import PostCardDescription from './subComponents/PostCardDescription';
import PostCardHeader from './subComponents/PostCardHeader';
import PostCardInput from './subComponents/PostCardInput';
import PostCardToolbar from './subComponents/PostCardToolbar';

const PostCard = () => {
   return (
      <>
         <VStack w='full' spacing='20px'>
            <PostCardHeader />
            <Image
               rounded='2xl'
               src='https://ss-images.saostar.vn/2020/03/20/7200343/theweeknd-1.jpg'
            />
            <PostCardToolbar />
            <PostCardDescription />
            <PostCardInput />
         </VStack>
      </>
   );
};

export default PostCard;
