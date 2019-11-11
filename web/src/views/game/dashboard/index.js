import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import styled from '@emotion/styled';
import theme from 'ui/styles/theme';
import toLower from 'lodash/toLower';
import startCase from 'lodash/startCase';

// components
import ShowUsers from 'views/game/dashboard/showUsers';
import UpdateName from 'views/game/dashboard/updateName';
import ScrumMasterDuties from 'views/game/dashboard/scrumMasterDuties';

// elements
import Title from 'ui/components/title';
import Button from 'ui/components/button';
import Wrapper from 'ui/components/wrapper';
import Section from 'ui/components/section';

const matchDispatchToProps = dispatch => ({
  navigate: url => {
    dispatch(push(url));
  }
});

class Dashboard extends React.Component {
  render() {
    const { gameId } = this.props.match.params;
    const { game = {}, isScrumMaster } = this.props;

    return (
      <Wrapper noStretch>
        <Section fullWidth>Welcome to {startCase(toLower(gameId))}'s Scrum Poker Game!</Section>
        {isScrumMaster && <ScrumMasterDuties {...this.props} />}
        <UpdateName {...this.props} />
        <ShowUsers {...this.props} />
      </Wrapper>
    );
  }
}

const ButtonWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: ${theme.spacing.small}px;
  margin: ${theme.spacing.xxsmall}px 0 0 0;
`;

export default connect(
  null,
  matchDispatchToProps
)(Dashboard);