import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware
]

const enchancer = applyMiddleware(...middlewares)

export const store = createStore(
  rootReducer(),
  composeWithDevTools(enchancer)
)

sagaMiddleware.run(rootSaga);
