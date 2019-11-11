const set = (rating) => {
  return {
    type: 'SET_RATING',
    payload: { data: rating }
  };
}
export default { set };
