import {
   Box,
   Icon,
   Modal,
   ModalBody,
   ModalContent,
   ModalOverlay,
   StackDivider,
   useDisclosure,
   VStack,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const PostCardMenu = ({ fontSize, color }) => {
   const { isOpen, onClose, onOpen } = useDisclosure(false);

   const onClickIcon = () => {
      onOpen();
   };

   return (
      <>
         <Icon
            as={BsThreeDots}
            fontSize={fontSize}
            color={color}
            cursor='pointer'
            onClick={onClickIcon}
         />
         <MenuPanel isOpen={isOpen} onClose={onClose} />
      </>
   );
};

const MenuPanel = ({ isOpen, onClose }) => {
   return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='sm'>
         <ModalOverlay />
         <ModalContent>
            <ModalBody px={0} py={4}>
               <VStack
                  spacing={4}
                  w='full'
                  divider={<StackDivider borderColor='gray.200' />}
               >
                  <Box fontWeight='bold' color='red.500'>
                     Unfollow
                  </Box>
                  <Box fontWeight='bold' color='red.500'>
                     Report
                  </Box>
                  <Box>Go to post</Box>
                  <Box>Share to...</Box>
                  <Box>Copy link</Box>
                  <Box>Embed</Box>
                  <Box>Cancel</Box>
               </VStack>
            </ModalBody>
         </ModalContent>
      </Modal>
   );
};

PostCardMenu.propTypes = {
   fontSize: PropTypes.string,
   color: PropTypes.string,
};

PostCardMenu.defaultProps = {
   fontSize: '20px',
   color: 'gray.500',
};

export default PostCardMenu;
