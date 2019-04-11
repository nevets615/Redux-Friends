import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const ADD_FRIENDS = 'ADD_FRIENDS';
export const TOGGLE_FRIENDS = 'TOGGLE_FRIENDS';
export const FILTER_FRIENDS = 'FILTER_FRIENDS';


export const addFriends = name => {
   
    return {
      type: ADD_FRIENDS,
      payload: name
    };
  };

  export const toggleFriends = id => {
    return {
      type: TOGGLE_FRIENDS,
      payload: id
    };
  };
  
  export const filterFriends = id => {
    return {
      type: FILTER_FRIENDS,
      payload: id
    };
  };
  export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post('http://localhost:5000/api/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      })
      .catch(err => console.log(err));
  };

