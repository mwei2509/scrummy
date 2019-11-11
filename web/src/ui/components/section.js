import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

const Section = styled('section')`
  ${p => p.fullWidth ? 'width: 100%;':''}
  color: ${theme.colors.White};
  font-size: ${theme.fontSizes.large};
  font-weight: 900;
  margin: ${theme.spacing.xxsmall}px;
  padding: ${theme.spacing.small}px;
  transition: 1s ease;

  &:nth-of-type(1) {
    background-color: ${theme.colors.theme2.Teal};
  }
  &:nth-of-type(2) {
    background-color: ${theme.colors.theme1.Pink};
  }
  &:nth-of-type(3) {
    background-color: ${theme.colors.theme1.Teal};
  }
  &:nth-of-type(4) {
    background-color: ${theme.colors.theme1.Yellow};
  }
  &:nth-of-type(5) {
    background-color: ${theme.colors.theme2.Blue1};
  }
  &:nth-of-type(6) {
    background-color: ${theme.colors.theme2.Blue2};
  }
  &:nth-of-type(7) {
    background-color: ${theme.colors.theme2.Yellow};
  }
`;

export default Section;