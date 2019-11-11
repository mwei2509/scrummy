/* sections that are basically buttons */
import React from 'react';
import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

import Section from './section';
import Button from './button';

const SectionButton = props => {
  const { onClick, fullWidth } = props;

  return (
    <StyledSection fullWidth>
      <StyledButton onClick={onClick}>
        {props.children}
      </StyledButton>
    </StyledSection>
  );
};

export default SectionButton;

const StyledSection = styled(Section)`
  ${p => p.fullWidth ? 'width: 100%;' : ''}
  min-width: 45%;
  margin: ${theme.spacing.xxsmall}px;
  padding: 0;
`;

const StyledButton = styled(Button)`
  margin: auto;
  height: 100%;
  width: 100%;
`;