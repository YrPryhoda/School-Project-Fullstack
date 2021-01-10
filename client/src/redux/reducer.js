import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../ducks/main';

const rootReducer = () => combineReducers({
  mainReducer
})

export default rootReducer;