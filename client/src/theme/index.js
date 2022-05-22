import { extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import '@fontsource/manrope';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/900.css';

const breakpoints = {
   sm: '320px',
   md: '768px',
   lg: '960px',
   xl: '1200px',
   '2xl': '1536px',
};

const colors = {
   mainFont: '#000000',
   subFont: '#6C6C6C',
};

const components = {
   Steps,
};

const fonts = {
   heading: 'manrope, sans-serif',
   body: 'nunito, sans-serif',
};

const theme = extendTheme({
   colors,
   fonts,
   breakpoints,
   components,
});

export default theme;
