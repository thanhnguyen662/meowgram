import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import MeowAvatar from '../../../../global/components/MeowAvatar';
// import PropTypes from 'prop-types';

// StoriesSlide.propTypes = {

// };

function StoriesSlide(props) {
   const storiesArray = [
      {
         name: 'RileyReid',
         avatar:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
      {
         name: 'Hello',
         avatar:
            'https://media.istockphoto.com/photos/always-smile-picture-id1314415203?b=1&k=20&m=1314415203&s=170667a&w=0&h=_Oe7Mg-mUin-pgfRIrpoDrwS1rfXM0jvCrrx5CS7bxs=',
      },
      {
         name: 'World',
         avatar:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
   ];

   return (
      <Box w='full'>
         <HStack spacing='20px'>
            {storiesArray.map((stories) => (
               <MeowAvatar
                  key={stories.avatar}
                  src={stories.avatar}
                  outline={true}
                  width='65px'
                  height='65px'
               />
            ))}
         </HStack>
      </Box>
   );
}

export default StoriesSlide;
