import React from 'react';
import styled from '@emotion/styled';
import theme from 'ui/styles/theme';

const GifImage = props => {
  const { gif, fullWidth, width } = props;
  return (
      <Gif src={gif.image_url} width={fullWidth ? '100%' : width}/>
  );
}

const Gif = styled('img')``;

export default GifImage;
