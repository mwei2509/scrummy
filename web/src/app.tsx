import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Game from './views/game/index';
import CreateOrJoinGame from './views/createOrJoinGame';
import VotingStarted from './views/votingStarted';
import './app.css';

function App() {
  return (
    <Switch>
      <Route exact path='/voting-started' component={VotingStarted} />
      <Route path='/:gameId' component={Game} />
      <Route path='/' component={CreateOrJoinGame} />
    </Switch>
  );
}

export default App;
