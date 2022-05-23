import {
   Button,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   Text,
} from '@chakra-ui/react';
import React from 'react';
// import PropTypes from 'prop-types';

const ConfirmModal = ({ isOpen, onClose, onOk }) => {
   const onClockOk = () => {
      onOk();
      onClose();
   };

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Confirmation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <Text>Are your sure about that?</Text>
            </ModalBody>

            <ModalFooter>
               <Button colorScheme='gray' mr={3} onClick={onClose}>
                  Close
               </Button>
               <Button colorScheme='red' onClick={onClockOk}>
                  Yes
               </Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

ConfirmModal.propTypes = {};

export default ConfirmModal;
