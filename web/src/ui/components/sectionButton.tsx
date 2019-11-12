/* sections that are basically buttons */
import React from 'react';
import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

import Section from './section';
import Button from './button';

type SectionButton = {
  onClick: Function,
  children: any
}

const SectionButton = (props:SectionButton) => {
  const { onClick } = props;

  const handleClick = (event:React.MouseEvent) => {
    onClick(event);
  }

  return (
    <StyledSection fullWidth>
      <StyledButton onClick={handleClick}>
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