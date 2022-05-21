import { AspectRatio, Image } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

ProfileImage.propTypes = {
   post: PropTypes.object,
};

function ProfileImage(props) {
   const { post } = props;

   return (
      <AspectRatio ratio={1} key={post.id}>
         <Image
            src={post.url}
            rounded={{ base: 'md', md: '2xl' }}
            cursor='pointer'
         />
      </AspectRatio>
   );
}

export default ProfileImage;
