import { Box, Button, Image, VStack } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';
import { cropImage } from '../../../../utils/cropImage';
// import PropTypes from 'prop-types';

const PostCreateCropImg = ({ file, handleSetCoppedFile }) => {
   const imgRef = useRef(null);
   const [crop, setCrop] = useState();
   const [completedCrop, setCompletedCrop] = useState();

   function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
      return centerCrop(
         makeAspectCrop(
            {
               unit: '%',
               width: 90,
            },
            aspect,
            mediaWidth,
            mediaHeight
         ),
         mediaWidth,
         mediaHeight
      );
   }

   function onImageLoad(e) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, 1));
   }

   const onClickCropImageNow = () => {
      const cropImg = cropImage({
         image: imgRef.current,
         crop: completedCrop || crop,
      });
      handleSetCoppedFile(cropImg);
   };

   return (
      <VStack w='full' h='full' position='relative' spacing='6'>
         <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={1 / 1}
         >
            <Image src={file.preview} onLoad={onImageLoad} ref={imgRef} />
         </ReactCrop>
         <Box
            position='absolute'
            top='2%'
            left='85%'
            transform='translate(-50%,-50%)'
         >
            <Button onClick={onClickCropImageNow} colorScheme='blue'>
               Crop Image
            </Button>
         </Box>
      </VStack>
   );
};

PostCreateCropImg.propTypes = {};

export default PostCreateCropImg;
