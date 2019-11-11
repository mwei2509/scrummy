const reducers = [
  require('./gif').default,
  require('./score').default,
  require('./rating').default,
  require('./socket').default
];

export default function reduce (prevState:any, action:any) {
  const stateWithoutError = { ...(prevState || {}) };
  delete stateWithoutError.error;

  const reducer = (state:any, currentFn:any) => currentFn(state, action);

  return reducers.reduce(reducer, { ...stateWithoutError });
}