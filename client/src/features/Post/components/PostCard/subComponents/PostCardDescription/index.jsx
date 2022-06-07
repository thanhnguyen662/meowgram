import { Flex, HStack, Icon, Spacer, Text, VStack } from '@chakra-ui/react';
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

   return (
      <>
         <Flex
            gap={{ base: 1, md: 2 }}
            direction={{ base: 'column', md: 'row' }}
            w='full'
            alignItems='start'
         >
            <Text fontWeight='bold'>{name}</Text>
            <Flex direction='row' w='full' gap='2'>
               <Text>{content}</Text>
               <Spacer />
               <Icon as={BsHeart} color='gray.500' />
            </Flex>
         </Flex>
      </>
   );
};

export default PostCardDescription;
