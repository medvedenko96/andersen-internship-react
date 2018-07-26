import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { apiMiddleware }  from './middleware/apiMiddleware';
import logger from 'redux-logger';

import rootReducer from './reducers/reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk,logger, apiMiddleware))
);

export default store;