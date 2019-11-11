export default function reduce (prevState:any, action:any) {

  if (action.type === 'SET_CURRENT_TAG') {
    return { ...prevState, tag: action.payload.data };
  }

  if (action.type === 'SET_SCORE') {
    return { ...prevState, score: action.payload.data };
  }

  return prevState;
}
