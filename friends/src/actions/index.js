// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const POSTING = 'POSTING';
export const POST_SUCCESS = 'POST_SUCCESS';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log(res);
      dispatch({ 
        type: SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FAILURE,
        payload: err
      });
    })
}

export const postFriend = friend => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .post('http://localhost:5000/friends', friend)
    .then(res => {
      dispatch({ 
        type: SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FAILURE,
        payload: err
      });
    })
}