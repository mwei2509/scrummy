const connectToSocket = socket => {
  return {
    type: 'CONNECT_TO_SOCKET',
    payload: {
      socket
    }
  }
};

const connectUser = (userId, gameId) => {
	return {
		type: 'CONNECT_USER_TO_GAME',
		payload: {
			userId,
			gameId
		}
	}
};

const receiveGameUpdate = game => {
  return {
    type: 'RECEIVE_GAME_UPDATE',
    payload: { game }
  }
};

export default {
  connectToSocket,
  connectUser,
  receiveGameUpdate
};