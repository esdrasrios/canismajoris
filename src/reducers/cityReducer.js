import { FETCH_CITY } from '../actions/types';

export const City = (state={}, action) => {
  switch(action.type) {
    case FETCH_CITY:
      return action.payload;
    default:
      return state  
  }
}