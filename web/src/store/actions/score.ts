const set = (score:number) => {
  return {
    type: 'SET_SCORE',
    payload: { data: score }
  };
}
export default { set };
