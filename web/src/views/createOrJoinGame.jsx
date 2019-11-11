import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

// // elements
import Wrapper from 'ui/components/wrapper';
import Title from 'ui/components/title';
// import Button from 'ui/components/button';

const mapDispatchToProps = dispatch => ({
  navigate: (url, params) => {
    dispatch(push(url, params));
  }
});

class CreateOrJoinGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: '',
      name: ''
    };
    this.updateGame = this.updateGame.bind(this);
    this.updateName = this.updateName.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  updateGame (e) {
    const game = e.target.value;
    this.setState({ game });
  }

  updateName (e) {
    const name = e.target.value;
    this.setState({ name });
  }

  submitName (e) {
    e.preventDefault();
    const { game, name } = this.state;
    this.props.navigate(`/${game}`, { name });
  }

  render() {
    return (
      <Wrapper>
        <CreateOrJoinGameForm onSubmit={this.submitName}>
          <Title fullWidth>Create a scrum poker giphy game!</Title>
          <InputText
            placeholder={'Game name'}
            value={this.state.game}
            onChange={this.updateGame}
          />
          <InputText
            placeholder={'Your name or nickname'}
            value={this.state.name}
            onChange={this.updateName}
          />
          <Button type='submit'>Join</Button>
        </CreateOrJoinGameForm>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateOrJoinGame);

const CreateOrJoinGameForm = styled('form')`
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing.standard}px;
  justify-content: center;
`;

const InputText = styled('input')`
  padding: ${theme.spacing.small}px;
  height: ${theme.spacing.standard}px;
  outline: 0;
  border: 0px;
  border-radius: ${theme.borderRadius}px;
  font-size: ${theme.fontSizes.medium};
  background-color: ${theme.colors.theme0.Blue3};
  margin-bottom: ${theme.spacing.small}px;
`;

const Button = styled('button')`
  padding: ${theme.spacing.small}px;
  background-color: ${theme.colors.theme0.Yellow};
  border: 0px;
  outline: 0;
  border-radius: ${theme.borderRadius}px;
  color: ${theme.colors.theme0.RedOrange};
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;
`;