import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

type TitleProps = {
  xl: boolean,
  fullWidth: boolean,
  left: boolean,
  right: boolean
};

const Title = styled('span')<TitleProps>`
  font-size: ${props => props.xl ? theme.fontSizes.x5large : theme.fontSizes.x2large};
  color: ${theme.colors.theme0.Blue1};
  font-weight: 900;
  display: block;
  font-family: Helvetica;
  margin: auto;
  width: ${props => props.fullWidth ? '100%' : `${theme.spacing.standard * 5}px`};
  text-align: ${props => props.left ? 'left' : props.right ? 'right' : 'center'};
`;

export default Title;