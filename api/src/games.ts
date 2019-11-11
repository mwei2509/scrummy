export interface Game {
  users: CleanUser[],
  gameId: string,
  scrumMasterId: string,
  status: string
}

export interface CleanUser {
  userId: string,
  name: string,
  result: object|null
}

export interface User {
  userId: string,
  name: string,
  result: object|null,
  socket: any
}

interface Games {
  [gameId:string]: Game
}

export const GAMES:Games = {};

export function updateUserInGame (io:any, user:User, gameId:string) {
  if (!GAMES[gameId]) {
    return;
  }
  GAMES[gameId].users = GAMES[gameId].users.map((gameUser:User) => {
    if (gameUser.userId === user.userId) {
      return getCleanUserInfo(user);
    }
    return gameUser;
  });
  emitUpdate(io, gameId);
}

function getCleanUserInfo (user:User): CleanUser {
  return {
    userId: user.userId,
    name: user.name,
    result: user.result
  };
}

export function startVoting (io:any, gameId:string) {
  GAMES[gameId].users = GAMES[gameId].users.map((gameUser:User) => {
    return {
      ...gameUser,
      result: null
    }
  });
  GAMES[gameId].status = 'voting';
  emitUpdate(io, gameId);
}

export function revealResults (io:any, gameId:string) {
  GAMES[gameId].status = 'reveal';
  emitUpdate(io, gameId);
}

function emitUpdate (io:any, gameId:string) {
  io.emit('update_game', { game: GAMES[gameId] });
}

export function addUserToGame (io:any, user:User, gameId:string) {
  if (!GAMES[gameId]) {
    // init game as scrum master
    initGame(gameId, user)
  } else if (GAMES[gameId].status !== '') {
    // reject user
    io.emit('reject_user', {
      message: 'voting has already started',
      userId: user.userId,
      gameId
    })
  } else {
    // add user to game
    GAMES[gameId].users.push(getCleanUserInfo(user));
  }
}

function initGame (gameId:string, user:User) {
  GAMES[gameId] = {
    users: [],
    gameId,
    scrumMasterId: user.userId,
    status: ''
  };
  GAMES[gameId].users.push(getCleanUserInfo(user));
}