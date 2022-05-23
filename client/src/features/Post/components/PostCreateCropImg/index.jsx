import {
   Button,
   Flex,
   Image,
   Menu,
   MenuButton,
   MenuItem,
   MenuList,
   VStack,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { BsFullscreen } from 'react-icons/bs';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';
import { cropImage } from '../../../../utils/cropImage';
// import PropTypes from 'prop-types';

const PostCreateCropImg = ({ file, handleSetCoppedFile, defaultAspect }) => {
   const imgRef = useRef(null);

   const [crop, setCrop] = useState();
   const [completedCrop, setCompletedCrop] = useState();
   const [aspect, setAspect] = useState(defaultAspect || 1 / 1);

   const centerAspectCrop = (mediaWidth, mediaHeight, aspect) => {
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
   };

   const onImageLoad = (e) => {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
   };

   const onClickCropImageNow = () => {
      const cropImg = cropImage({
         image: imgRef.current,
         crop: completedCrop || crop,
      });
      handleSetCoppedFile({
         cropImage: cropImg,
         currentAspect: aspect,
      });
   };

   const onChangeAspectMenu = (value) => {
      const { width, height } = imgRef.current;
      setAspect(value);
      setCrop(centerAspectCrop(width, height, value));
   };

   const isAspectDisabled = (value) => {
      if (!defaultAspect) return;
      return defaultAspect === value ? false : true;
   };

   return (
      <VStack w='full' h='full' position='relative' spacing='6'>
         <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
         >
            <Image src={file.preview} onLoad={onImageLoad} ref={imgRef} />
         </ReactCrop>
         <Flex
            position='absolute'
            top='2%'
            left='82%'
            transform='translate(-50%,-50%)'
            gap={3}
         >
            <Menu w='50px'>
               <MenuButton as={Button}>
                  <BsFullscreen />
               </MenuButton>
               <MenuList>
                  <MenuItem
                     onClick={() => onChangeAspectMenu(1 / 1)}
                     isDisabled={isAspectDisabled(1 / 1)}
                  >
                     1:1
                  </MenuItem>
                  <MenuItem
                     onClick={() => onChangeAspectMenu(4 / 5)}
                     isDisabled={isAspectDisabled(4 / 5)}
                  >
                     4:5
                  </MenuItem>
                  <MenuItem
                     onClick={() => onChangeAspectMenu(16 / 9)}
                     isDisabled={isAspectDisabled(16 / 9)}
                  >
                     16:9
                  </MenuItem>
               </MenuList>
            </Menu>
            <Button onClick={onClickCropImageNow} colorScheme='blue'>
               Crop Image
            </Button>
         </Flex>
      </VStack>
   );
};

PostCreateCropImg.propTypes = {};

export default PostCreateCropImg;
