import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import {reducer as mainReducer} from '../ducks/main';

const rootReducer = () => combineReducers({
  form,
  mainReducer
})

export default rootReducer;