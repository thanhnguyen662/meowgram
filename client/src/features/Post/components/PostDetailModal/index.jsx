import {
   Grid,
   GridItem,
   Modal,
   ModalBody,
   ModalContent,
   ModalOverlay,
   Spacer,
   VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostCardImage from '../PostCard/subComponents/PostCardImage';
import PostCardInput from '../PostCard/subComponents/PostCardInput';
import PostCardToolbar from '../PostCard/subComponents/PostCardToolbar';
import PostDetailModalCaption from './subComponents/PostDetailModalCaption';
import PostDetailModalComment from './subComponents/PostDetailModalComment';
import PostDetailModalHeader from './subComponents/PostDetailModalHeader';

const PostModalPage = () => {
   const navigate = useNavigate();

   return (
      <Modal
         isOpen={true}
         onClose={() => navigate(-1)}
         closeOnOverlayClick={true}
         size='6xl'
         isCentered
      >
         <ModalOverlay />
         <ModalContent w='full' pt='5' pb='5' rounded='xl'>
            <ModalBody h='full'>
               <Grid templateColumns='repeat(24, 1fr)' gap={6} h='full'>
                  <GridItem colSpan={14}>
                     <PostCardImage />
                  </GridItem>
                  <GridItem colSpan={10}>
                     <VStack spacing={6} h='full'>
                        <PostDetailModalHeader />
                        <PostCardToolbar />
                        <PostDetailModalCaption />
                        <PostDetailModalComment />
                        <Spacer />
                        <PostCardInput />
                     </VStack>
                  </GridItem>
               </Grid>
            </ModalBody>
         </ModalContent>
      </Modal>
   );
};

export default PostModalPage;
