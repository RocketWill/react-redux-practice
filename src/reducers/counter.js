const initialState = 2;

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'INCREMENT':
    console.log(payload);
    return state + 1;

case 'DECREMENT':
    return state - 1;

  default:
    return state
  }
}
