import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

const Button = styled('button')`
  color: ${theme.colors.White};
  font-size: ${theme.fontSizes.large};
  font-weight: 900;
  border: 0;
  outline: none;
  margin: ${theme.spacing.xxsmall}px;
  transition: 1s ease;
  background-color: Transparent;
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.theme0.OffBlack};
  }
`;

export default Button;