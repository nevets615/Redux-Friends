import { ADD_FRIENDS, TOGGLE_FRIENDS, FILTER_FRIENDS } from "../actions";

const initialState = {
  todos: [
    {
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com'
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
  
      default:
        return state;
    }
  }
  
  export default reducer;