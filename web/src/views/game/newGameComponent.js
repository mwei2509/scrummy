import React from 'react';
import { connect } from 'react-redux';
import config from 'config';
import openSocket from 'socket.io-client';
import { push } from 'connected-react-router';

// actions
import connections from 'store/actions/socket';
const { api_url } = config;

const mapStateToProps = state => {
  let holder = state || {};
  holder = holder.default || holder;
  const { connection = {} } = holder;
  return { connection };
};

const mapDispatchToProps = dispatch => ({
  connectToSocket: socket => {
    dispatch(connections.connectToSocket(socket));
  },
  connectUser: (userId, gameId) => {
    dispatch(connections.connectUser(userId, gameId))
  },
  receiveGameUpdate: game => {
    dispatch(connections.receiveGameUpdate(game))
  },
  navigate: url => {
    dispatch(push(url));
  }
});

export default WrappedComponent => {
  class Socket extends React.Component {
    constructor(props) {
      super(props);
      const { state = {} } = props.location
      
      this.state = {
        name: state.name
      }
      this.listen = this.listen.bind(this);
      // listeners
      this.userJoinedGame = this.userJoinedGame.bind(this);
      this.userLeftGame = this.userLeftGame.bind(this);
      this.updateGame = this.updateGame.bind(this);
      this.rejectUser = this.rejectUser.bind(this);
      // broadcasts
      this.updateUser = this.updateUser.bind(this);
      this.startNewRound = this.startNewRound.bind(this);
      this.revealResults = this.revealResults.bind(this);
    }
  
    componentDidMount () {
      const socket = openSocket(api_url);
      this.props.connectToSocket(socket);
      window.setTimeout(this.listen);
    }
  
    componnetWillUnmount () {
      const { socket } = this.props.connection;
  
      socket.emit('disconnect');
    }
  
    listen () {
      const { socket } = this.props.connection;
      socket.on('user', userId => {
        this.connectUserToGame(userId);
      });
      socket.on('new_user_in_game', this.userJoinedGame);
      socket.on('user_left_game', this.userLeftGame);
      socket.on('update_game', this.updateGame);
      socket.on('reject_user', this.rejectUser);
    }
  
    rejectUser ({ message, userId, gameId }) {
      const { userId: currentUser } = this.props.connection;
      if (userId === currentUser) {
        console.log(message);
        this.props.navigate(`/voting-started`);
      }
    }
  
    connectUserToGame (userId) {
      const { socket } = this.props.connection;
      const { gameId } = this.props.match.params;
      const { name } = this.state;

      if (!this.currentUserExists()) {
        socket.emit('add_user_to_game', { gameId });
        this.props.connectUser(userId, gameId)
        this.updateUser({ name });
      }
    }

    // listeners
    updateGame (resp) {
      this.updateCurrentGame({ ...resp });
    }
  
    userJoinedGame (resp) {
      const message = 'user joined game';
      this.updateCurrentGame({ ...resp, message });
    }
  
    userLeftGame (resp) {
      const message = 'user left game';
      this.updateCurrentGame({ ...resp, message });
    }
  
    updateCurrentGame({ game, message }) {
      console.log(message);
      if (this.fromThisGame(game)) {
        this.props.receiveGameUpdate(game);
      }
    }

    shouldBroadcast (resp) {
      const { game, userId } = resp;
      return this.fromThisGame(game) && this.fromDifferentUser(userId);
    }

    fromThisGame (broadcastGame) {
      const { gameId } = this.props.match.params;
      return gameId === broadcastGame.gameId;
    }
  
    fromDifferentUser (broadcastUserId) {
      const { userId } = this.props.connection;
      return broadcastUserId !== userId;
    }

    currentUserExists () {
      const { userId } = this.props.connection;
      return !!userId;
    }

    // broadcasts
    updateUser (updates) {
      const { gameId } = this.props.match.params;
      const { socket } = this.props.connection;
      socket.emit('update_user', {
        gameId,
        updates
      });
    }
  
    startNewRound () {
      const { gameId } = this.props.match.params;
      const { socket } = this.props.connection;
      socket.emit('start_new_round', { gameId });
    }

    revealResults () {
      const { gameId } = this.props.match.params;
      const { socket } = this.props.connection;
      socket.emit('reveal_results', { gameId }); 
    }

    render () {
      const { connection } = this.props

      return <WrappedComponent
        {...this.props}
        connection={connection}
        updateUser={this.updateUser}
        startNewRound={this.startNewRound}
        revealResults={this.revealResults}
      />
    }
  }
  
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Socket);
}