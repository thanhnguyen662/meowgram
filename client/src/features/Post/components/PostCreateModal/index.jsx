// import PropTypes from 'prop-types';
import {
   Box,
   Button,
   Grid,
   GridItem,
   Icon,
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   Text,
   useDisclosure,
   VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import ConfirmModal from '../../../../global/components/ConfirmModal';
import PostCardImage from '../PostCard/subComponents/PostCardImage';
import PostCreateCropImg from '../PostCreateCropImg';
import PostCreateUploadZone from '../PostCreateUploadZone';
import PostCreateModalHeader from './subComponents/PostCreateModalHeader';
import PostCreateModalTextArea from './subComponents/PostCreateModalTextArea';
import { uploadFile } from '../../../../firebase';
import { useSelector } from 'react-redux';
import { authData } from '../../../Auth/authSlice';
import postApi from '../../../../api/postApi';

const PostCreateModal = ({ isOpen, onClose }) => {
   const {
      userData: { email },
   } = useSelector(authData);

   const {
      isOpen: isConfirmModalOpen,
      onClose: onCloseConfirmModalClose,
      onOpen: onOpenCreatePostModal,
   } = useDisclosure();

   const [step, setStep] = useState(0);
   const [files, setFiles] = useState([]);
   const [activeFile, setActiveFile] = useState(0);
   const [caption, setCaption] = useState('');
   const [croppedFile, setCoppedFile] = useState([]);
   const [defaultAspect, setDefaultAspect] = useState(null);

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

   const handleSetCoppedFile = ({ cropImage, currentAspect }) => {
      if (activeFile < files.length - 1) setActiveFile((prev) => prev + 1);
      setCoppedFile([...croppedFile, cropImage]);
      setDefaultAspect(currentAspect);
   };

   const onClickCloseButton = () => {
      onOpenCreatePostModal();
   };

   const resetStateWhenCloseModal = () => {
      onClose();

      setActiveFile(0);
      setStep(0);
      setCoppedFile([]);
      setFiles([]);
      setDefaultAspect(null);
      setCaption('');
   };

   const onClickGoBack = () => {
      if (step === 2) {
         setActiveFile(0);
         setCoppedFile([]);
         setCaption('');
      }
      if (step === 1) {
         setFiles([]);
      }
      setDefaultAspect(null);
      setStep(step - 1);
   };

   const onChangeCaption = (e) => {
      setCaption(e.target.value);
   };

   const onClickPost = async () => {
      try {
         const uploadPromise = croppedFile.map(async (file) => {
            const img = await fetch(file);
            const bytes = await img.blob();

            const fileURL = await uploadFile({
               email,
               file: bytes,
               directory: 'post',
            });

            return fileURL;
         });

         const fileURLPromise = await Promise.all(uploadPromise);

         const createResponse = await postApi.create({
            imageURLs: fileURLPromise,
            caption,
         });

         console.log('🚀 ~ createResponse', createResponse);
      } catch (error) {
         console.log(error);
      }
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
               defaultAspect={defaultAspect}
            />
         ),
      },
      {
         id: 2,
         content: (
            <Step2Content
               croppedFile={croppedFile}
               onClickPost={onClickPost}
               onChangeCaption={onChangeCaption}
            />
         ),
      },
   ];

   return (
      <>
         <Modal
            isOpen={isOpen}
            onClose={onClose}
            size='6xl'
            position='relative'
            closeOnOverlayClick={false}
            closeOnEsc={false}
         >
            <ModalOverlay />
            <ModalContent w='max-content'>
               <ModalHeader
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
               >
                  <Icon
                     as={BsArrowLeft}
                     fontSize='25'
                     color='gray.600'
                     cursor='pointer'
                     onClick={onClickGoBack}
                  />
                  <Text>Create new post</Text>
                  <Icon
                     as={MdOutlineClose}
                     fontSize='25'
                     color='gray.600'
                     cursor='pointer'
                     onClick={onClickCloseButton}
                  />
               </ModalHeader>
               <ModalBody h='full'>
                  {stepContents.map((item) => {
                     // eslint-disable-next-line
                     if (item.id !== step) return;
                     return <Box key={item.id}>{item.content}</Box>;
                  })}
               </ModalBody>
               <ModalFooter></ModalFooter>
            </ModalContent>
         </Modal>
         <ConfirmModal
            isOpen={isConfirmModalOpen}
            onClose={onCloseConfirmModalClose}
            onOpen={onOpenCreatePostModal}
            onOk={resetStateWhenCloseModal}
         />
      </>
   );
};

const StepContent = ({ handleSetFiles, files }) => {
   return (
      <Box>
         <PostCreateUploadZone handleSetFiles={handleSetFiles} files={files} />
      </Box>
   );
};

const Step1Content = ({
   files,
   handleSetCoppedFile,
   activeFile,
   defaultAspect,
}) => {
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
                  defaultAspect={defaultAspect}
               />
            );
         })}
      </Box>
   );
};

const Step2Content = ({ croppedFile, onClickPost, onChangeCaption }) => {
   return (
      <Grid templateColumns='repeat(24, 1fr)' gap={8} h='full'>
         <GridItem colSpan={14}>
            <PostCardImage postImage={croppedFile} disabledClick={true} />
         </GridItem>
         <GridItem colSpan={10} h='full'>
            <VStack spacing={4} h='full'>
               <PostCreateModalHeader />
               <PostCreateModalTextArea onChangeCaption={onChangeCaption} />
               <Button
                  w='full'
                  colorScheme='blue'
                  size='lg'
                  onClick={onClickPost}
               >
                  Post now
               </Button>
            </VStack>
         </GridItem>
      </Grid>
   );
};

PostCreateModal.propTypes = {};

export default PostCreateModal;
