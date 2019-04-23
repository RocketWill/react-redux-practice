import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE, LOAD_USER_FULFILLED, LOAD_USER_REJECTED, LOAD_USER_PENDING } from '../constans/index';

const initialState = {
  isFetching: false,
  error: null,
  user:{}
};

export default (state = initialState, { type, user, error, payload }) => {
  switch (type) {

  case LOAD_USER_FULFILLED:
    return { 
      isFetching: false,
      error: null,
      user: payload.data.results[0].email
    };
  
  case LOAD_USER_PENDING:
    return { 
    isFetching: true,
      error: null,
      user: {}
    };

  case LOAD_USER_REJECTED:
    console.log(payload);
    return { 
    isFetching: false,
      error: payload.message,
      user: {}
    };

  default:
    return state
  }
}
