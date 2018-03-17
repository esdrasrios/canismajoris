import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { City } from './cityReducer';

const rootReducer = combineReducers({
  city : City,
  form : reduxFormReducer
});

export default rootReducer;