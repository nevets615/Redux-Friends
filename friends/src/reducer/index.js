import { ADD_FRIENDS, TOGGLE_FRIENDS, FILTER_FRIENDS } from "../actions";
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    
  } from '../actions/Friends'
const initialState = {
  friends: [
    {
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com',
        error: '',
        fetchingData: false,
        loggingIn: false
      }
    ] 
    

}
function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_FRIENDS:
        return {
          ...state,
          friends: [
            ...state.friends,
            { name: action.payload, completed: false, id: Date.now() }
          ]
        };
  
      case TOGGLE_FRIENDS:
        return {
          ...state,
          friends: state.todos.map(friend => {
            if (friend.id === action.payload) {
              return {
                ...friend,
                completed: !friend.completed
              };
            } else {
              return friend;
            }
          })
        };
  
      case FILTER_FRIENDS:
        return {
          ...state,
          friends: state.friends.filter(friend => !friend.completed)
        };
  


  case LOGIN_START:
  return {
    ...state,
    error: '',
    errorStatusCode: null,
    fetchingData: false,
    loggingIn: true
  };
case LOGIN_SUCCESS:
  return {
    ...state,
    error: '',
    loggingIn: false
  };
case FETCH_DATA_START:
  return {
    ...state,
    error: '',
    fetchingData: true,
    errorStatusCode: null
  };
case FETCH_DATA_SUCCESS:
  return {
    ...state,
    error: '',
    errorStatusCode: null,
    fetchingData: false,
    gasPrices: action.payload
      .filter(price => price.type === 'Gasoline - Regular')
      .filter(
        price =>
          price.location === 'US' || price.location === 'State of Hawaii'
      )
  };
// case FETCH_DATA_FAILURE:
//   return {
//     ...state,
//     fetchingData: false,
//     error: action.payload.data.error,
//     errorStatusCode: action.payload.status
//   };
  default:
  return state;
}
}
  export default reducer;