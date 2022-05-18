import {
   HStack,
   Icon,
   Spacer,
   Text,
   useBreakpointValue,
   VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsHeart } from 'react-icons/bs';

function PostCardDescription(props) {
   const commentArray = [
      {
         name: 'thanhnguyen662',
         content: 'Duis in aliquip minim esse.',
      },
      {
         name: 'thongdau123',
         content:
            'In sit in deserunt culpa dolor elit exercitation labore mollit.',
      },
   ];

   return (
      <VStack w='full' spacing='3'>
         <HStack spacing='1' w='full'>
            <Text>Like by</Text>
            <Text fontWeight='bold'>thanhnguyen662</Text>
            <Text>and</Text>
            <Text fontWeight='bold'>231 others</Text>
         </HStack>
         <VStack w='full' spacing='2'>
            {commentArray.map((comment) => (
               <Comment
                  key={comment.name}
                  name={comment.name}
                  content={comment.content}
               />
            ))}
         </VStack>
      </VStack>
   );
}

const Comment = (props) => {
   const { content, name } = props;
   const variant = useBreakpointValue({ base: 'block', md: 'inline' });

   return (
      <>
         {variant === 'inline' ? (
            <HStack spacing='3' w='full' alignItems='start'>
               <Text fontWeight='bold'>{name}</Text>
               <Text>{content}</Text>
               <Spacer />
               <Icon as={BsHeart} color='gray.500' />
            </HStack>
         ) : (
            <VStack w='full' alignItems='start' spacing='0.5'>
               <Text fontWeight='bold'>{name}: </Text>
               <HStack w='full'>
                  <Text>{content}</Text>
                  <Spacer />
                  <Icon as={BsHeart} color='gray.500' />
               </HStack>
            </VStack>
         )}
      </>
   );
};

export default PostCardDescription;
