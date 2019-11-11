import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reduce from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { loadState, saveState } from './localStorage';
import thunk from 'redux-thunk';

const giphyClient = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:`https://api.giphy.com/v1/gifs`,
  responseType: 'json'
});

export const history = createBrowserHistory();

const appReducer = combineReducers({
  router: connectRouter(history),
  default: reduce
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

const initialState = { default: loadState() };

const middleware = [
  routerMiddleware(history),
  axiosMiddleware(giphyClient),
  thunk
];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 10 })) ||
    compose;
}

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, composedEnhancers);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
