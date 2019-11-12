const set = (rating:string) => {
  return {
    type: 'SET_RATING',
    payload: { data: rating }
  };
}
export default { set };
