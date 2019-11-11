const set = (score) => {
  return {
    type: 'SET_SCORE',
    payload: { data: score }
  };
}
export default { set };
