import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { Provider } from 'react-redux';

import reducer from './store/reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// Middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      return result;
    };
  };
};

export const store = createStore(
  reducer,
  compose(applyMiddleware(logger, thunk)),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
