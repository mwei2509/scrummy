import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  ${p => p.noStretch ? '': `height: calc(100vh - ${theme.spacing.xxsmall * 2}px);`}
  padding: ${theme.spacing.xxsmall}px;
  overflow: none;
`;

export default Wrapper;