import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider
      theme={extendTheme({
        colors: {
          blackAlt: '#191A24',
        },
        fonts: { body: 'Montserrat' },
        styles: {
          global: {
            body: {
              overflow: 'hidden',
            },
            '::-webkit-scrollbar': {
              width: '8px',
            },
            '::-webkit-scrollbar-track:': {
              background: '#272631',
            },
            '::-webkit-scrollbar-thumb': {
              background: '#FF375B',
            },
            '::-webkit-scrollbar-thumb:hover': {
              background: '#dd1f42',
            },
          },
        },
      })}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
