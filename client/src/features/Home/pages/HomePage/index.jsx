import {
   Box,
   Grid,
   GridItem,
   Heading,
   StackDivider,
   VStack,
} from '@chakra-ui/react';
import React from 'react';
import PostCard from '../../../Post/components/PostCard';
import StoriesSlide from '../../../Stories/components/StoriesSlide';
import SuggestBar from '../../components/SuggestBar';

const HomePage = () => {
   const postCards = [
      {
         id: 1,
      },
      {
         id: 2,
      },
   ];

   return (
      <>
         <Grid templateColumns='repeat(16, 1fr)' gap={{ base: 0, md: 6 }}>
            <GridItem w='100%' colSpan={{ base: 16, md: 11 }}>
               <VStack w='full' alignItems='flex-start' spacing='30px'>
                  <StoriesSlide />
                  <Heading fontSize='26px'>Feed</Heading>
                  <VStack
                     spacing='40px'
                     w='full'
                     divider={<StackDivider borderColor='gray.200' />}
                  >
                     {postCards.map((post) => (
                        <Box key={post.id} w='full'>
                           <PostCard />
                        </Box>
                     ))}
                  </VStack>
               </VStack>
            </GridItem>
            <GridItem colSpan={5}>
               <Box
                  w='full'
                  position='sticky'
                  top='96px'
                  display={{ base: 'none', md: 'block' }}
               >
                  <SuggestBar />
               </Box>
            </GridItem>
         </Grid>
      </>
   );
};

export default HomePage;
