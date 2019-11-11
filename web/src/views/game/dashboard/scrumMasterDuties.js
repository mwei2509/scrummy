import React from 'react';
import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

// elements
import Title from 'ui/components/title';
import Button from 'ui/components/button';
import Section from 'ui/components/section';
import SectionButton from 'ui/components/sectionButton';

class ScrumMaster extends React.Component {
  render() {
    const { startNewRound, game = {} } = this.props;
    const numUsers = game.users && game.users.length;
    return (
      <React.Fragment>
        <Section fullWidth>You are the ScrumMaster!</Section>
        {numUsers < 3
          ? <Section fullWidth>Need at least 2 voting users to start a round</Section>
          : <SectionButton fullWidth onClick={startNewRound}>Start Round!</SectionButton>}
      </React.Fragment>
    );
  }
}

export default ScrumMaster;

const StyledButton = styled(Button)`
  background-color: ${theme.colors.theme0.Blue1};
  margin: 0px;
  width: 100%;
`;
