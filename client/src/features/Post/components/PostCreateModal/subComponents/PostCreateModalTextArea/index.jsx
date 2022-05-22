import { Box, Textarea } from '@chakra-ui/react';
import React from 'react';
// import PropTypes from 'prop-types';
import { customScrollBar } from '../../../../../../global/style/scrollbar';

const PostCreateModalTextArea = (props) => {
   return (
      <Box w='full'>
         <Textarea
            h='50vh'
            resize='none'
            placeholder='What is new?'
            variant='unstyled'
            fontSize='20px'
            minH='35vh'
            css={customScrollBar}
         />
      </Box>
   );
};

PostCreateModalTextArea.propTypes = {};

export default PostCreateModalTextArea;
