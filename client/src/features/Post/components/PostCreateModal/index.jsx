// import PropTypes from 'prop-types';
import {
   Box,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   useConst,
   VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import PostCreateCropImg from '../PostCreateCropImg';
import PostCreateUploadZone from '../PostCreateUploadZone';
import PostCreateModalButton from './subComponents/PostCreateModalButton';
import PostCreateModalHeader from './subComponents/PostCreateModalHeader';
import PostCreateModalTextArea from './subComponents/PostCreateModalTextArea';

const PostCreateModal = ({ isOpen, onClose }) => {
   const [step, setStep] = useState(0);
   const [files, setFiles] = useState([]);

   useEffect(() => {
      if (files.length > 0) return setStep(1);
   }, [files]);

   const onClickChangeStep = (step) => {
      setStep(step);
      if (step === 0) {
         setFiles((prev) => {
            prev.length = 0;
            return [...prev];
         });
      }
   };

   const handleSetFiles = (acceptedFiles) => {
      setFiles(
         acceptedFiles.map((file) =>
            Object.assign(file, {
               preview: URL.createObjectURL(file),
            })
         )
      );
   };

   const stepContents = useConst(() => [
      {
         id: 0,
         content: <StepContent handleSetFiles={handleSetFiles} files={files} />,
      },
      {
         id: 1,
         content: <Step1Content />,
      },
      {
         id: 2,
         content: <Step2Content />,
      },
   ]);

   return (
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader
               display='flex'
               justifyContent='center'
               alignItems='center'
            >
               Upload your feeling...
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               {stepContents.map((item) => {
                  // eslint-disable-next-line
                  if (item.id !== step) return;
                  return <Box key={item.id}>{item.content}</Box>;
               })}
            </ModalBody>

            <ModalFooter>
               <PostCreateModalButton
                  onClickChangeStep={onClickChangeStep}
                  step={step}
               />
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

const StepContent = ({ handleSetFiles, files }) => {
   return (
      <Box>
         <PostCreateUploadZone handleSetFiles={handleSetFiles} files={files} />
      </Box>
   );
};

const Step1Content = () => {
   return (
      <Box>
         <PostCreateCropImg />
      </Box>
   );
};

const Step2Content = () => {
   return (
      <VStack w='full' alignItems='start' spacing='4'>
         <PostCreateModalHeader />
         <PostCreateModalTextArea />
      </VStack>
   );
};

PostCreateModal.propTypes = {};

export default PostCreateModal;
