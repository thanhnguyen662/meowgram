import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, GridItem } from '@chakra-ui/react';
import PostCreateUploadZone from '../../components/PostCreateUploadZone';

const PostCreatePage = (props) => {
   return (
      <Grid templateColumns='repeat(24, 1fr)' gap={8}>
         <GridItem colSpan='6'>
            <PostCreateUploadZone />
         </GridItem>
         <GridItem colSpan='18'>
            <h1>This is form</h1>
         </GridItem>
      </Grid>
   );
};

PostCreatePage.propTypes = {};

export default PostCreatePage;
