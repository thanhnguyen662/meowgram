import {
   Button,
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostModalPage = () => {
   const navigate = useNavigate();

   return (
      <Modal isOpen={true}>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>Adipisicing Lorem magna ut do.</ModalBody>

            <ModalFooter>
               <Button colorScheme='blue' mr={3} onClick={() => navigate(-1)}>
                  Close
               </Button>
               <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default PostModalPage;
