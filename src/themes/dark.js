const { createTheme } = require('@material-ui/core');

const dark = createTheme({
  palette: {
    primary: {
      light: '#56c91d',
      main: '#398613',
      dark: '#1d430a',
    },
    background: {
      1: '#000',
      2: '#111',
      3: '#222',
      4: '#333',
      5: '#444',
      6: '#555',
      7: '#666',
      8: '#777',
    },
    border: {
      color: {
        1: '#000',
        2: '#111',
        3: '#222',
        4: '#333',
        5: '#444',
        6: '#555',
        7: '#666',
        8: '#777',
      },
      width: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '6px',
        6: '8px',
        7: '10px',
        8: '12px',
      },
      radius: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '6px',
        6: '8px',
        7: '10px',
        8: '12px',
      },
    },
  },
  font: {
    size: {
      1: '.6rem',
      2: '.8rem',
      3: '1rem',
      4: '1.25rem',
      5: '1.5rem',
      6: '1.75rem',
      7: '2rem',
      8: '2.5rem',
      9: '3rem',
      10: '4rem',
      11: '5rem',
      12: '7.5rem',
      13: '10rem',
      14: '12.5rem',
      15: '15rem',
    },
    family: {
      title: 'Roboto',
      titleAlt: 'Roboto Mono',
      subtitle: 'Roboto',
      subtitleAlt: 'Roboto Mono',
      body: 'Roboto',
      bodyAlt: 'Roboto Mono',
    },
    weight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
    },
    color: {
      1: '#fff',
      2: '#eee',
      3: '#ddd',
      4: '#ccc',
      5: '#bbb',
    },
  },
});

export default dark;
