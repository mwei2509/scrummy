import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import gif from 'store/actions/gif';
import scores from 'store/actions/score';
import ratings from 'store/actions/rating';

import styled from '@emotion/styled';

// components
import Wrapper from 'ui/components/wrapper';
import SectionButton from 'ui/components/sectionButton';

const mapStateToProps = state => {
  let holder = state || {};
  holder = holder.default || holder;
  const { gif = {}, score } = holder;
  return { gif, score };
};

const mapDispatchToProps = dispatch => ({
  getRandomGif: (score, rating, gameId) => {
    dispatch(scores.set(score));
    dispatch(ratings.set(rating));
    dispatch(gif.random(score, rating)).then(resp => {
      dispatch(push(`/${gameId}/preview`));
    })
  },
  navigate: url => {
    dispatch(push(url))
  }
});

class PickScore extends React.Component {
  render() {
    const { gameId } = this.props.match.params;
    const { getRandomGif, game, isScrumMaster } = this.props;
    if (isScrumMaster) {
      this.props.navigate(`/${gameId}/show`);
      return null;
    }
    return (
      <ScoreCardWrapper>
        <SectionButton onClick={() => getRandomGif(1, 'PG-13', gameId)}>1</SectionButton>
        <SectionButton onClick={() => getRandomGif(2, 'PG-13', gameId)}>2</SectionButton>
        <SectionButton onClick={() => getRandomGif(3, 'PG-13', gameId)}>3</SectionButton>
        <SectionButton onClick={() => getRandomGif(5, 'PG-13', gameId)}>5</SectionButton>
        <SectionButton onClick={() => getRandomGif(8, 'PG-13', gameId)}>8</SectionButton>
        <SectionButton onClick={() => getRandomGif(13, 'PG-13', gameId)}>13</SectionButton>
        <SectionButton onClick={() => getRandomGif('coffee', 'PG-13', gameId)}>coffee</SectionButton>
      </ScoreCardWrapper>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickScore);

const ScoreCardWrapper = styled(Wrapper)`
  section {
    flex: 1
  }
`;