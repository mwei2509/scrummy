export default function reduce (prevState, action) {

  if (action.type === 'SET_RATING') {
    return { ...prevState, rating: action.payload.data };
  }

  return prevState;
}
