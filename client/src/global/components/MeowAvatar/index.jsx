import { Avatar, Flex } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

MeowAvatar.propTypes = {
   src: PropTypes.string,
   outline: PropTypes.bool,
   width: PropTypes.string,
   height: PropTypes.string,
};

MeowAvatar.defaultProps = {
   src: '',
   outline: false,
   width: '56px',
   height: '56px',
};

function MeowAvatar(props) {
   const { src, outline, width, height } = props;

   return (
      <Flex
         position='relative'
         alignItems='center'
         justifyContent='center'
         w={width}
         h={height}
         borderRadius='100rem'
         cursor='pointer'
         _before={{
            content: '""',
            position: 'absolute',
            zIndex: '2',
            width: '100%',
            height: '100%',
            background: outline
               ? 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
               : 'transparent',
            borderRadius: '100rem',
            transition: 'all 0.8s linear',
         }}
         _hover={{
            _before: {
               transform: 'rotate(360deg)',
            },
         }}
         _after={{
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '2',
            background: '#fff',
            width: 'calc(100% - 5px)',
            height: 'calc(100% - 5px)',
            borderRadius: '100rem',
         }}
      >
         <Avatar
            position='absolute'
            zIndex='3'
            src={src}
            w={`calc(${width} - 15%)`}
            h={`calc(${height} - 15%)`}
         />
      </Flex>
   );
}

export default MeowAvatar;
