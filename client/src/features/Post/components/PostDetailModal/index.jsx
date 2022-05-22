import {
   Divider,
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
import { useLocation, useNavigate } from 'react-router-dom';
import PostCardImage from '../PostCard/subComponents/PostCardImage';
import PostCardInput from '../PostCard/subComponents/PostCardInput';
import PostCardToolbar from '../PostCard/subComponents/PostCardToolbar';
import PostDetailModalCaption from './subComponents/PostDetailModalCaption';
import PostDetailModalComment from './subComponents/PostDetailModalComment';
import PostDetailModalHeader from './subComponents/PostDetailModalHeader';

const PostModalPage = () => {
   let location = useLocation();
   const navigate = useNavigate();

   const isModalOpen = () => {
      const splitPathname = location.pathname.split('/');
      if (splitPathname.length === 3 && splitPathname[1] === 'post')
         return true;
      return false;
   };

   return (
      <Modal
         isOpen={isModalOpen}
         onClose={() => navigate(-1)}
         closeOnOverlayClick={true}
         size='6xl'
         isCentered
      >
         <ModalOverlay />
         <ModalContent w='full' py='5' rounded='xl'>
            <ModalBody h='full'>
               <Grid templateColumns='repeat(24, 1fr)' gap={3} h='full'>
                  <GridItem colSpan={14}>
                     <PostCardImage />
                  </GridItem>
                  <GridItem colSpan={10}>
                     <VStack spacing={6} h='full'>
                        <PostDetailModalHeader />
                        <Divider opacity={1} border={0.5} />
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
