const { createTheme } = require('@material-ui/core');

const light = createTheme({
  palette: {
    background: {
      1: '#aaa',
      2: '#bbb',
      3: '#ccc',
      4: '#ddd',
      5: '#eee',
      6: '#fff',
    },
    border: {
      color: {
        1: '#888',
        2: '#999',
        3: '#aaa',
        4: '#bbb',
        5: '#ccc',
        6: '#ddd',
        7: '#eee',
        8: '#fff',
        // 1: '#000',
        // 2: '#111',
        // 3: '#222',
        // 4: '#333',
        // 5: '#444',
        // 6: '#555',
        // 7: '#666',
        // 8: '#777',
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
    },
  },
  font: {
    size: {
      1: '2rem',
    },
    family: {
      title: 'Roboto',
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
      1: '#000',
      2: '#111',
    },
  },
});

export default light;
