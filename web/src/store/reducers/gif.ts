export default function reduce (prevState:any, action:any) {
  let { gif = {} } = prevState || {};

  if (action.type === 'GET_GIF_SUCCESS') {
    gif = { ...action.payload.data.data }
    return { ...prevState, gif };
  }

  return prevState;
}
