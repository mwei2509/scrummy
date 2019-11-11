export default function reduce (prevState:any, action:any) {

  if (action.type === 'SET_RATING') {
    return { ...prevState, rating: action.payload.data };
  }

  return prevState;
}
