import { extendTheme } from '@chakra-ui/react';
import '@fontsource/manrope';
import '@fontsource/roboto';

const colors = {
   mainFont: '#000000',
   subFont: '#6C6C6C',
};

const fonts = {
   heading: 'Roboto, sans-serif',
   body: 'Manrope, sans-serif',
};

const theme = extendTheme({
   colors,
   fonts,
});

export default theme;
