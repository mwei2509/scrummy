/* global localStorage */

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state = { default: {} }) => {
  try {
    // const cleanedConnection = {
    //   ...state.default.connection
    // };
    // delete cleanedConnection.socket;
    const toSave = {
      ...state.default,
      connection: {}
    }
    const serializedState = JSON.stringify(toSave);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // console.log(err);
    // Ignore errors
  }
};
