import { FETCH_USER_SUCCESS } from '../constans/index';


export default (state = {}, { type, user }) => {
  switch (type) {

  case FETCH_USER_SUCCESS:
    return { user }

  default:
    return state
  }
}
