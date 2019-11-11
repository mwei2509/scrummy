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
  vote: gameId => {
    dispatch(push(`/${gameId}/ready`))
  },
  goBack: gameId => {
    dispatch(push(`/${gameId}/pick`))
  }
});

class PREVIEW extends React.Component {
  submitResult() {
    const { gameId } = this.props.match.params;
    const { gif, score, tag } = this.props;
    this.props.updateUser({
      result: {
        gif, score, tag
      }
    })
    this.props.vote(gameId);
  }

  render() {
    const { gameId } = this.props.match.params;
    const { gif, score, rating, tag } = this.props;

    return (
      <Wrapper>
        <Title fullWidth xl>{score} #{tag}</Title>
        <GifImage gif={gif} fullWidth />
        <SectionButton fullWidth onClick={() => this.props.getRandomGif(score, rating)}>get another gif</SectionButton>
        <SectionButton fullWidth onClick={() => this.props.goBack(gameId)}>Go back</SectionButton>
        <SectionButton fullWidth onClick={() => this.submitResult()}>Vote</SectionButton>
      </Wrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PREVIEW);