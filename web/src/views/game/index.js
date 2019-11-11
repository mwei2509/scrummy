import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// components
import PickScore from 'views/game/voting/pickScore';
import Preview from 'views/game/voting/preview';
import Reveal from 'views/game/reveal/index';
import Dashboard from 'views/game/dashboard/index';
import NewGameComponent from 'views/game/newGameComponent';

class Game extends React.Component {
  render() {
    const { gameId } = this.props.match.params;
    const { connection = {}, updateUser, startNewRound, revealResults } = this.props;
    const { game = {}, userId } = connection;
    const user = (game.users && game.users.find(gameUser => gameUser.userId === userId)) || {};
    const isScrumMaster = user.userId && game.scrumMasterId && user.userId === game.scrumMasterId;

    const componentProps = {
      game,
      user,
      updateUser,
      startNewRound,
      revealResults,
      isScrumMaster
    }

    if (game.status === 'reveal') {
      return (
        <Switch>
          <Route path='/:gameId/show' render={props => <Reveal {...props} {...componentProps} />} />
          <Redirect to={`/${gameId}/show`} />
        </Switch>
      );
    }
    if (game.status === 'voting') {
      return (
        <Switch>
          <Route path='/:gameId/ready' render={props => <Reveal {...props} {...componentProps} />} />
          <Route path='/:gameId/preview' render={props => <Preview {...props} {...componentProps} />} />
          <Route path='/:gameId/pick' render={props => <PickScore {...props} {...componentProps} />} />
          {!isScrumMaster && <Redirect to={`/${gameId}/pick`} />}
          {isScrumMaster && <Redirect to={`/${gameId}/ready`} />}
          <Route path='/:gameId' render={props => <Dashboard {...props} {...componentProps} />} />
        </Switch>
      );
    }
    return (
      <Switch>
        <Route path='/:gameId/dashboard' render={props => <Dashboard {...props} {...componentProps} />} />
        <Redirect to={`/${gameId}/dashboard`} />
      </Switch>
    );
  }
}

export default NewGameComponent(Game);
