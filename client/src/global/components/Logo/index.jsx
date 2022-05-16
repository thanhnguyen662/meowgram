import { Image } from '@chakra-ui/react';
import React from 'react';
import textLogo from './textLogo.svg';

export const TextLogo = (props) => {
   return <Image src={textLogo} {...props} w='55%' />;
};
