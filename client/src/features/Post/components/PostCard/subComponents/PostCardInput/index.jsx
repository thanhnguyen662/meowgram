import {
   Button,
   Icon,
   Input,
   InputGroup,
   InputLeftElement,
   InputRightElement,
   Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';

const PostCardInput = () => {
   return (
      <InputGroup zIndex='1'>
         <InputLeftElement width='4rem' py='26px' fontSize='26px'>
            <Icon as={BsEmojiSmile} color='gray.500' />
         </InputLeftElement>

         <Input
            placeholder='Add a comment...'
            rounded='full'
            py='26px'
            pl='60px'
            pr='60px'
         />

         <InputRightElement width='4.5rem' py='26px'>
            <Text fontWeight='bold' color='blue.500'>
               Post
            </Text>
         </InputRightElement>
      </InputGroup>
   );
};

export default PostCardInput;
