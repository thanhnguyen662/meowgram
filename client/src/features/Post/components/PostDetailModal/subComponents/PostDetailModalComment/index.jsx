import { Box, HStack, Icon, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsHeart } from 'react-icons/bs';
import MeowAvatar from '../../../../../../global/components/MeowAvatar';
import { customScrollBar } from '../../../../../../global/style/scrollbar';
// import PropTypes from 'prop-types';

const PostDetailModalComment = (props) => {
   const data = [
      {
         id: 1,
         name: 'thanhnguyen662',
         comment:
            'Nisi eiusmod irure est magna velit ipsum reprehenderit anim.',
         photoURL:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
      {
         id: 2,
         name: 'petiu123',
         comment:
            'Excepteur excepteur duis consectetur fugiat nostrud in sint sunt proident non ex voluptate.',
         photoURL:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
      {
         id: 3,
         name: 'thanhnguyen662',
         comment:
            'Nisi eiusmod irure est magna velit ipsum reprehenderit anim.',
         photoURL:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
      {
         id: 4,
         name: 'petiu123',
         comment:
            'Irure voluptate dolor velit dolore aliqua mollit qui esse irure cillum aute reprehenderit consequat.',
         photoURL:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
   ];

   return (
      <VStack
         w='full'
         alignItems='start'
         spacing='5'
         overflow='auto'
         h='45vh'
         css={customScrollBar}
      >
         {data.map((i) => (
            <Comment
               key={i.id}
               name={i.name}
               comment={i.comment}
               photoURL={i.photoURL}
            />
         ))}
      </VStack>
   );
};

const Comment = ({ name, comment, photoURL }) => {
   return (
      <HStack w='full' spacing='5' pr='2'>
         <Box h='full' display='flex' alignItems='start'>
            <MeowAvatar
               width='45px'
               height='45px'
               outline={true}
               src={photoURL}
            />
         </Box>
         <Text>
            <span style={{ fontWeight: 'bold', paddingRight: '5px' }}>
               {name}
            </span>
            {comment}
         </Text>
         <Spacer />
         <Icon as={BsHeart} />
      </HStack>
   );
};

PostDetailModalComment.propTypes = {};

export default PostDetailModalComment;
