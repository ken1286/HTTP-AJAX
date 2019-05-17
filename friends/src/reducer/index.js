import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  friends: [],
  isFetching: true,
  error: null
  // Array characters, Boolean fetching, null error.
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case SUCCESS:
      return {
        isFetching: false,
        friends: action.payload,
        error: null
      };
    case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};