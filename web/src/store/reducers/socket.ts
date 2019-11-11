export default function reduce (prevState:any, action:any) {
  let connection = { ...prevState.connection };

  if (action.type === 'CONNECT_TO_SOCKET') {
    const { socket } = action.payload;
    connection = {
      ...connection,
      socket
    };
    return {
      ...prevState,
      connection
    };
  }

  if (action.type === 'CONNECT_USER_TO_GAME') {
    const { userId, gameId } = action.payload;
    connection = {
      ...connection,
      userId,
      gameId
    };
    return {
      ...prevState,
      connection
    }
  }

  if (action.type === 'RECEIVE_GAME_UPDATE') {
    connection = {
      ...connection,
      game: action.payload.game
    };
    return {
      ...prevState,
      connection
    }
  }

  return prevState;
}