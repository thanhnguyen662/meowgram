import { Flex, HStack, Icon, Spacer } from '@chakra-ui/react';
import React from 'react';
import { BsBookmark, BsChatSquare, BsHeart, BsTag } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
// import PostCardMenu from '../PostCardMenu';

const PostCardToolbar = () => {
   let location = useLocation();
   const navigate = useNavigate();

   const onClickCommentIcon = () => {
      navigate('/post/27', {
         state: { backgroundLocation: location },
      });
   };

   return (
      <Flex w='full'>
         <HStack spacing='30px'>
            <ToolbarIcon as={BsHeart} />

            <ToolbarIcon
               as={BsChatSquare}
               location={location}
               onClick={onClickCommentIcon}
            />
            <ToolbarIcon as={BsTag} />
         </HStack>
         <Spacer />
         <ToolbarIcon as={BsBookmark} />
      </Flex>
   );
};

const ToolbarIcon = ({ as, onClick }) => (
   <Icon as={as} fontSize='25px' cursor='pointer' onClick={onClick} />
);

export default PostCardToolbar;
