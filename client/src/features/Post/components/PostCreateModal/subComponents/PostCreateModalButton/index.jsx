import { Button, HStack, Icon } from '@chakra-ui/react';
import React from 'react';
// import PropTypes from 'prop-types';
import { BsEmojiHeartEyes } from 'react-icons/bs';

const PostCreateModalButton = ({ onClickChangeStep, step }) => {
   return (
      <HStack w='full' alignItems='end' justifyContent='end'>
         {step === 1 && (
            <>
               <Button onClick={() => onClickChangeStep(0)}>Previous</Button>
               <Button onClick={() => onClickChangeStep(2)}>Next</Button>
            </>
         )}
         {step === 2 && (
            <>
               <Button onClick={() => onClickChangeStep(1)}>Previous</Button>
               <Button
                  leftIcon={<Icon as={BsEmojiHeartEyes} />}
                  colorScheme='blue'
                  mr={3}
                  lineHeight='1'
               >
                  Post it!
               </Button>
            </>
         )}
      </HStack>
   );
};

PostCreateModalButton.propTypes = {};

export default PostCreateModalButton;
