import { Avatar, Flex } from '@chakra-ui/react';
import React from 'react';

const AvatarOutline = (props) => {
   return (
      <Flex
         position='relative'
         alignItems='center'
         justifyContent='center'
         w='56px'
         h='56px'
         borderRadius='100rem'
         cursor='pointer'
         _before={{
            content: '""',
            position: 'absolute',
            zIndex: '98',
            borderRadius: 'inherit',
            background: '#fff',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, red, orange)',
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
            zIndex: '99',
            borderRadius: 'inherit',
            background: '#fff',
            width: 'calc(100% - 5px)',
            height: 'calc(100% - 5px)',
            borderRadius: '100rem',
         }}
      >
         <Avatar
            position='absolute'
            zIndex='100'
            src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'
         />
      </Flex>
   );
};

export default AvatarOutline;
