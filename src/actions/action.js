import { INCREMENT, DECREMENT, FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE, LOAD_USER } from '../constans/index';
import axios from 'axios';
import { reject } from 'when';

export const increment = (payload) => {
  // return (aaa) => {
  //   setTimeout(() => {
  //     aaa({
  //       type: INCREMENT
  //     });
  //   }, 2000);
  // }
  return {
    type: INCREMENT,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("CHENG");
      })
    }),
  }
}

export const decrement = () => ({
  type: DECREMENT,
})


export const getUser = () => {
  // return (dispatch) => {
  //   dispatch(fetchUserRequest());
  //   axios.get("https://api.randomuser.me/")
  //     .then((res) => {
  //       console.log(res.data.results[0].email);
  //       dispatch(fetchUser(res.data.results[0].email));
  //     })
  //     .catch((error) => {
  //       dispatch(fetchUserFailure(error));
  //     })
  // };

  return {
    type: LOAD_USER,
    //payload 必須是 promise
    // payload: axios.get("https://api.randomuser.me/")
    payload: {
      promise: axios.get("https://api.randomuser.me/")
    }
  }
};

export const fetchUser = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }  
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  }  
};


export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error
  }  
};