import React from 'react';
// import { connect } from 'react-redux';
// import { push } from 'connected-react-router';
import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

// // elements
import Title from 'ui/components/title';
// import Button from 'ui/components/button';
import Section from 'ui/components/section';


class UpdateName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.updateName = this.updateName.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  updateName (e) {
    const name = e.target.value;
    this.setState({ name });
  }

  submitName (e) {
    e.preventDefault();
    const { name } = this.state;
    this.props.updateUser({ name });
  }

  render() {
    const { user = {} } = this.props;
 
    return (
      <React.Fragment>
        <UpdateFormWrapper fullWidth name={user.name}>
          <span>You are an anonymous user</span>
          {!user.name && <UpdateNameForm onSubmit={this.submitName}>
            <InputText
              placeholder={'Your name or nickname'}
              value={this.state.name}
              onChange={this.updateName}
            />
            <Button type='submit'>update</Button>
          </UpdateNameForm>}
        </UpdateFormWrapper>
      </React.Fragment>
    );
  }
}

export default UpdateName;

const UpdateFormWrapper = styled(Section)`
  height: ${p => p.name ? 0 : `${(theme.spacing.standard * 4) + (theme.spacing.small * 3)}px`};
  transition: ${theme.transition};
  font-size: ${theme.fontSizes.medium};
  padding: 0px;

  span {
    margin: ${theme.spacing.small}px;
    display: block;
  }
`;

const UpdateNameForm = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${theme.spacing.small}px;
`;

const InputText = styled('input')`
  padding: ${theme.spacing.small}px;
  height: ${theme.spacing.standard}px;
  outline: 0;
  border: 0px;
  border-radius: ${theme.borderRadius}px;
  border-radius: ${theme.borderRadius}px ${theme.borderRadius}px 0 0;
  font-size: ${theme.fontSizes.medium};
  background-color: ${theme.colors.theme0.Blue3};
`;

const Button = styled('button')`
  background-color: ${theme.colors.theme0.Yellow};
  border: 0px;
  outline: 0;
  border-radius: 0 0 ${theme.borderRadius}px ${theme.borderRadius}px;
  color: ${theme.colors.theme0.RedOrange};
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;
`;