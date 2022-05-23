// import PropTypes from 'prop-types';
import {
   Box,
   Grid,
   GridItem,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalOverlay,
   VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import PostCardImage from '../PostCard/subComponents/PostCardImage';
import PostCreateCropImg from '../PostCreateCropImg';
import PostCreateUploadZone from '../PostCreateUploadZone';
import PostCreateModalHeader from './subComponents/PostCreateModalHeader';
import PostCreateModalTextArea from './subComponents/PostCreateModalTextArea';

const PostCreateModal = ({ isOpen, onClose }) => {
   const [step, setStep] = useState(0);
   const [files, setFiles] = useState([]);
   const [activeFile, setActiveFile] = useState(0);
   const [croppedFile, setCoppedFile] = useState([]);

   useEffect(() => {
      if (files.length > 0) return setStep(1);
   }, [files]);

   useEffect(() => {
      if (files.length !== 0 && files.length === croppedFile.length) {
         setStep(2);
      }
   }, [files, croppedFile]);

   const handleSetFiles = (acceptedFiles) => {
      setFiles(
         acceptedFiles.map((file) =>
            Object.assign(file, {
               preview: URL.createObjectURL(file),
            })
         )
      );
   };

   const handleSetCoppedFile = (file) => {
      if (activeFile < files.length - 1) setActiveFile((prev) => prev + 1);
      setCoppedFile([...croppedFile, file]);
   };

   const onClickCloseButton = () => {
      setActiveFile(0);
      setStep(0);
      setCoppedFile([]);
      setFiles([]);
   };

   const stepContents = [
      {
         id: 0,
         content: <StepContent handleSetFiles={handleSetFiles} files={files} />,
      },
      {
         id: 1,
         content: (
            <Step1Content
               files={files}
               handleSetCoppedFile={handleSetCoppedFile}
               activeFile={activeFile}
            />
         ),
      },
      {
         id: 2,
         content: <Step2Content croppedFile={croppedFile} />,
      },
   ];

   return (
      <Modal
         isOpen={isOpen}
         onClose={onClose}
         size='6xl'
         closeOnOverlayClick={false}
      >
         <ModalOverlay />
         <ModalContent py='8' w='max-content'>
            <ModalCloseButton onClick={onClickCloseButton} />
            <ModalBody>
               {stepContents.map((item) => {
                  // eslint-disable-next-line
                  if (item.id !== step) return;
                  return <Box key={item.id}>{item.content}</Box>;
               })}
            </ModalBody>
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

const Step1Content = ({ files, handleSetCoppedFile, activeFile }) => {
   return (
      <Box w='600px'>
         {files.map((file, index) => {
            // eslint-disable-next-line
            if (index !== activeFile) return;
            return (
               <PostCreateCropImg
                  key={index}
                  file={file}
                  handleSetCoppedFile={handleSetCoppedFile}
               />
            );
         })}
      </Box>
   );
};

const Step2Content = ({ croppedFile }) => {
   return (
      <Grid templateColumns='repeat(24, 1fr)' gap={8} h='full'>
         <GridItem colSpan={14}>
            <PostCardImage postImage={croppedFile} />
         </GridItem>
         <GridItem colSpan={10}>
            <VStack spacing={6} h='full'>
               <PostCreateModalHeader />
               <PostCreateModalTextArea />
            </VStack>
         </GridItem>
      </Grid>
   );
};

PostCreateModal.propTypes = {};

export default PostCreateModal;
