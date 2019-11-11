const reducers = [
  require('./gif').default,
  require('./score').default,
  require('./rating').default,
  require('./socket').default
];

export default function reduce (prevState, action) {
  const stateWithoutError = { ...(prevState || {}) };
  delete stateWithoutError.error;

  const reducer = (state, currentFn) => currentFn(state, action);

  return reducers.reduce(reducer, { ...stateWithoutError });
}