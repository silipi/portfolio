import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider
      theme={extendTheme({
        components: {
          Text: {
            variants: {
              'section-title': {
                p: '12',
                mb: '6',
                as: 'h2',
                color: 'white',
                left: '18%',
                casing: 'uppercase',
                fontWeight: 'light',
                letterSpacing: '0.165em',
              },
            },
          },
        },

        colors: {
          blackAlt: '#191A24',
        },
        fonts: { body: 'Montserrat' },
        styles: {
          global: {
            html: {
              scrollBehavior: 'smooth',
            },
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
