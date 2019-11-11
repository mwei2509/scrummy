import React from 'react';
// import { connect } from 'react-redux';
// import { push } from 'connected-react-router';
import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

// elements
import Title from 'ui/components/title';
import Button from 'ui/components/button';
import Section from 'ui/components/section';


class Users extends React.Component {
  render() {
    const { game = {}, user = {} } = this.props;
    const { users = [] } = game;

    return (
      <UserWrapper fullWidth>
        <UserTitle>Users</UserTitle>
        {users.map((gameUser, key) => {
          const name = gameUser.name || `Anonymous User ${key + 1}`;
          const isScrumMaster = gameUser.userId === game.scrumMasterId;

          return (
            <User
              key={key}
              currentUser={gameUser.userId === user.userId}
            >
              {name}{' '}
              {isScrumMaster && '*'}
            </User>
          );
        })}
      </UserWrapper>
    );
  }
}

const UserTitle = styled('h5')`
  font-size: ${theme.fontSizes.medium};
  margin: 0px;
`;

// const UserWrapper = styled('div')`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding: ${theme.spacing.small}px;
//   min-height: ${theme.spacing.standard * 8}px;
// `;

const UserWrapper = styled(Section)`
  font-size: ${theme.fontSizes.small};
  min-height: ${theme.spacing.standard * 8}px;
`;

const User = styled('div')`
  font-weight: ${p => p.currentUser ? '900' : '500'};
  color: ${theme.colors.theme0.Blue1};
  font-size: ${theme.fontSizes.medium};
`;

// const ButtonWrapper = styled('div')`
//   display: flex;
//   flex-direction: column;
// `;

// const StyledButton = styled(Button)`
//   width: 100%;
//   padding: ${theme.spacing.small}px;
//   margin: ${theme.spacing.xxsmall}px 0 0 0;
// `;

export default Users;