import { extendTheme } from '@chakra-ui/react';
import '@fontsource/manrope';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/900.css';

const colors = {
   mainFont: '#000000',
   subFont: '#6C6C6C',
};

const fonts = {
   heading: 'Roboto, sans-serif',
   body: 'nunito, sans-serif',
};

const theme = extendTheme({
   colors,
   fonts,
});

export default theme;
