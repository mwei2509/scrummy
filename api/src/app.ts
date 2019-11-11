import * as express from "express";
import * as cors from 'cors';
import { 
  User, 
  GAMES,
  updateUserInGame,
  addUserToGame,
  startVoting,
  revealResults
} from './games';
import { generateIdWithPrefix } from './helpers/ids';

const app = express();
const server = require('http').createServer(app);

app.use(cors({ origin: '*' }));
server.listen(process.env.PORT || 4000);

app.get('/', (req:any, res:any) => {
  res.send('<h1>hello world</h1>');
});

export const io = require('socket.io').listen(server);

io.sockets.on('connection', (socket:any) => {
  console.log('connected');
  const userId = generateIdWithPrefix('u');
  let user:User = {
    userId,
    socket,
    result: null,
    name: ''
  }

  socket.emit('user', userId);

  // disconnect
  socket.on('disconnect', () => {
    console.log('disconnected');

    Object.keys(GAMES).forEach((gameId:string) => {
      GAMES[gameId].users = GAMES[gameId].users.filter(gameUser => gameUser.userId !== userId );

      io.emit('user_left_game', {
        userId,
        game: GAMES[gameId]
      })
    
      if (GAMES[gameId]) {
        if (!GAMES[gameId].users.length) {
          delete GAMES[gameId];
        } else if (userId === GAMES[gameId].scrumMasterId) {
          GAMES[gameId].users.forEach(gameUser => {
            io.emit('reject_user', { message: 'scrummaster has left the game', userId: gameUser.userId, gameId })
          })
        }
      }
    })
  });

  // user update
  socket.on('update_user', ({ gameId, updates }: { gameId: string, updates: User}) => {
    user = { ...user, ...updates };
    updateUserInGame(io, user, gameId);
  });

  socket.on('start_new_round', ({ gameId }: { gameId: string }) => {
    startVoting(io, gameId);
  });

  socket.on('reveal_results', ({ gameId }: { gameId: string }) => {
    revealResults(io, gameId);
  });

  socket.on('add_user_to_game', ({ gameId, updates }: { gameId: string, updates: User}) => {
    user = { ...user, ...updates };
    addUserToGame(io, user, gameId);
  })
});