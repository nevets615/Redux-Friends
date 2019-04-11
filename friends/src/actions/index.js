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
