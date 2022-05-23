import {
   Button,
   Center,
   Icon,
   Input,
   Spacer,
   Text,
   VStack,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';
// import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { BsFillCloudArrowUpFill, BsFillCloudCheckFill } from 'react-icons/bs';

const PostCreateUploadZone = ({ handleSetFiles, files }) => {
   const onDrop = useCallback(
      (acceptedFiles) => {
         handleSetFiles(
            acceptedFiles.map((file) =>
               Object.assign(file, {
                  preview: URL.createObjectURL(file),
               })
            )
         );
      },
      [handleSetFiles]
   );

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   // useEffect(() => {
   //    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
   // }, [files]);

   return (
      <Center
         {...getRootProps()}
         w='full'
         minW='450px'
         h='150%'
         borderWidth='2px'
         rounded='xl'
         borderStyle='dashed'
         transition='all 0.2s linear'
         borderColor='gray.300'
         _hover={{
            borderColor: 'blue.500',
            color: 'blue.500',
         }}
      >
         <Input {...getInputProps()} />
         <UploadDescription isDragActive={isDragActive} />
      </Center>
   );
};

const UploadDescription = ({ isDragActive }) => {
   return (
      <VStack
         w='full'
         gap={4}
         py={8}
         _hover={{ color: 'blue.500' }}
         transition='all 0.2s linear'
      >
         {isDragActive ? (
            <Icon as={BsFillCloudCheckFill} fontSize='50' />
         ) : (
            <Icon as={BsFillCloudArrowUpFill} fontSize='50' />
         )}

         <VStack>
            <Text fontWeight='bold' fontSize='20' lineHeight={1}>
               {isDragActive ? 'Drop now' : 'Select Image'}
            </Text>
            <Text>
               {isDragActive ? 'release your mouse' : 'or drag here...'}
            </Text>
         </VStack>
         <VStack>
            <Text lineHeight={1}>.PNG, .JPG, .JPEG</Text>
            <Text>are accepts</Text>
         </VStack>
         <Spacer />
         <Button colorScheme='blue'>Post now!</Button>
      </VStack>
   );
};

PostCreateUploadZone.propTypes = {};

export default PostCreateUploadZone;
