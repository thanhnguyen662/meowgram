import { Flex, HStack, Icon, Spacer } from '@chakra-ui/react';
import React from 'react';
import { BsBookmark, BsChatSquare, BsHeart, BsTag } from 'react-icons/bs';

const PostCardToolbar = () => {
   return (
      <Flex w='full'>
         <HStack spacing='30px'>
            <ToolbarIcon as={BsHeart} />
            <ToolbarIcon as={BsChatSquare} />
            <ToolbarIcon as={BsTag} />
         </HStack>
         <Spacer />
         <ToolbarIcon as={BsBookmark} />
      </Flex>
   );
};
const ToolbarIcon = ({ as }) => (
   <Icon as={as} fontSize='25px' cursor='pointer' />
);

export default PostCardToolbar;
