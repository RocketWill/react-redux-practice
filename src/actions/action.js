import { INCREMENT, DECREMENT, FETCH_USER_SUCCESS } from '../constans/index';
import axios from 'axios';

export const increment = (payload) => {
  return (aaa) => {
    setTimeout(() => {
      aaa({
        type: INCREMENT
      });
    }, 2000);
  }
}

export const decrement = () => ({
  type: DECREMENT,
})


export const getUser = () => {
  return (dispatch) => {
    axios.get("https://api.randomuser.me/")
      .then((res) => {
        console.log(res.data.results[0].email);
        dispatch(fetchUser(res.data.results[0].email));
      })
      .catch((error) => {
        console.log(error)
      })
  };
};

export const fetchUser = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }  
};

