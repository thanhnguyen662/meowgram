import { Box, Textarea } from '@chakra-ui/react';
import React from 'react';
// import PropTypes from 'prop-types';
import { customScrollBar } from '../../../../../../global/style/scrollbar';

const PostCreateModalTextArea = ({ onChangeCaption }) => {
   return (
      <Box w='full' h='full'>
         <Textarea
            onChange={onChangeCaption}
            resize='none'
            placeholder='What is new...?'
            border='0'
            fontSize='20px'
            h='100%'
            css={customScrollBar}
            p={0}
            _focus={{
               border: 0,
            }}
         />
      </Box>
   );
};

PostCreateModalTextArea.propTypes = {};

export default PostCreateModalTextArea;
