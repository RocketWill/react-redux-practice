import { INCREMENT, DECREMENT } from '../constans/index';

export const increment = (payload) => ({
  type: INCREMENT,
  payload
})

export const decrement = () => ({
  type: DECREMENT,
})
