import { getTag } from 'helpers/tags';

const getRandomGif = (tag:string, rating:string) => {
  return {
    types: ['GET_GIF', 'GET_GIF_SUCCESS', 'GET_GIF_FAIL'],
    payload: {
      request: {
        url: `/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&tag=${tag}&rating=${rating}`,
        method: 'get'
      }
    }
  };
}

const setCurrentTag = (tag:string) => {
  return {
    type: 'SET_CURRENT_TAG',
    payload: {
      data: tag
    }
  };
}
const random = (score:any, rating = 'PG') => {
  const tag = getTag(score);
  return (dispatch:Function) => {
    return Promise.all([
      dispatch(getRandomGif(tag, rating)),
      dispatch(setCurrentTag(tag))
    ]);
  }
}
export default { random };
