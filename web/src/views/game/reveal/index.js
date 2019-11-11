import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import gif from 'store/actions/gif';
import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

// components
import GifImage from 'views/game/gifImage';

// elements
import Title from 'ui/components/title';
import Button from 'ui/components/button';
import Wrapper from 'ui/components/wrapper';
import Section from 'ui/components/section';
import SectionButton from 'ui/components/sectionButton';

const mapStateToProps = state => {
  let holder = state || {};
  holder = holder.default || holder;
  const { gif = {}, tag, score, rating } = holder;
  return { gif, tag, score, rating };
};

const mapDispatchToProps = dispatch => ({
  getRandomGif: (score, rating) => {
    dispatch(gif.random(score, rating))
  },
  navigate: url => {
    dispatch(push(url))
  }
});

class Reveal extends React.Component {
  constructor(props) {
    super(props);
    this.renderCard = this.renderCard.bind(this);
  }
  renderCard (reveal, gameUser, key) {
    const { user } = this.props;
    const isCurrentUser = gameUser.userId === user.userId;
    const name = gameUser.name || `Anonymous User ${key + 1}`;

    if (reveal || (gameUser.result && isCurrentUser)) {
      const { gif, score, tag } = gameUser.result;
      return (
        <UserResult>
          <span>{isCurrentUser ? 'You' : name} chose: {score} #{tag}</span>
          <GifImage gif={gif} fullWidth/>
        </UserResult>
      );
    }

    return (
      <UserResult>
        {name} is {!!gameUser.result ? 'ready!':'still voting...'}
      </UserResult>
    );
  }

  renderRevealed (votingUsers) {
    const { gameId } = this.props.match.params;
    const { isScrumMaster, startNewRound } = this.props;
    
    return (
      <Wrapper>
        {isScrumMaster && <SectionButton fullWidth onClick={startNewRound}>Start another round</SectionButton>}
        <React.Fragment>
          {votingUsers.map((gameUser, key) => this.renderCard(true, gameUser, key))}
        </React.Fragment>
      </Wrapper>
    );
  }

  renderHidden (votingUsers) {
    const { isScrumMaster, revealResults, userId } = this.props;
    const readyToReveal = votingUsers.reduce((ready, user) => {
      if (!user.result) {
        ready = false;
      }
      return ready;
    }, true);
  
    return (
      <Wrapper>
        {readyToReveal ? 
          isScrumMaster ? 
            <SectionButton fullWidth onClick={revealResults}>REVEAL</SectionButton> :
            <Title fullWidth xl>Waiting</Title> :
          <Title fullWidth xl>Waiting</Title>
        }
        <React.Fragment>
          {votingUsers.map((gameUser, key) => this.renderCard(false, gameUser, key))}
        </React.Fragment>
      </Wrapper>
    );
  }

  render() {
    const { game = {} } = this.props;
    let votingUsers = [];
    if (game.users) {
      votingUsers = game.users.filter(gameUsers => gameUsers.userId !== game.scrumMasterId);
    }
    if (game.status === 'reveal') {
      return this.renderRevealed(votingUsers);
    }
    return this.renderHidden(votingUsers);
  }
}

const UserResultWrapper = styled(Wrapper)`
  width: 100%;
`;

const UserResult = styled(Section)`
  width: 100%;
  min-height: ${theme.spacing.standard * 6}px;
  margin: ${theme.spacing.xxsmall}px;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reveal);