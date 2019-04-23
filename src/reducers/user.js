import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from '../constans/index';

const initialState = {
  isFetching: false,
  error: null,
  user:{}
};

export default (state = initialState, { type, user, error }) => {
  switch (type) {

  case FETCH_USER_SUCCESS:
    return { 
      isFetching: false,
      error: null,
      user: user
    };
  
  case FETCH_USER_REQUEST:
    return { 
    isFetching: true,
      error: null,
      user: {}
    };

  case FETCH_USER_FAILURE:
    return { 
    isFetching: false,
      error: error,
      user: {}
    };

  default:
    return state
  }
}
