import React from 'react';
import { Global, css } from '@emotion/core';
import theme from './theme';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          font-weight: normal;
        }
        body {
          font-family: ${theme.primaryFont};
          font-size: ${theme.baseFontSize};
          background-color: ${theme.backgroundColor};
          margin: 0;
        }
        input:focus,
        select:focus,
        textarea:focus,
        button:focus {
          outline: none;
        }
        #root {
          position: relative;
          height: 100vh;
        }
        svg {
          transition: fill 0.25s ease-out;
          transition-delay: 0s;
        }
        body,
        p,
        small,
        label {
          overflow-wrap: break-word;
        }
        a,
        button {
          transition: all ${theme.transition};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0 0 ${theme.spacing.standard}px 0;
        }
        h1 {
          font-family: 'Helvetica Bold';
          font-size: ${theme.fontSizes.x4large};
          line-height: 80px;
          letter-spacing: -1px;
        }
        h2 {
          font-family: 'Helvetica Bold';
          font-size: ${theme.fontSizes.x4large};
          line-height: 72px;
          letter-spacing: -0.5px;
        }
        h3 {
          font-family: 'Helvetica Bold';
          font-size: ${theme.fontSizes.x2large};
          line-height: 56px;
          letter-spacing: -0.65px;
        }
        h4 {
          font-family: 'Helvetica Bold';
          font-size: ${theme.fontSizes.xlarge};
          line-height: 40px;
          letter-spacing: -0.25px;
        }
        h5 {
          font-family: 'Helvetica Bold';
          font-size: ${theme.fontSizes.large};
          line-height: 32px;
          letter-spacing: -0.2px;
        }
        h6 {
          font-family: 'Helvetica';
          font-size: ${theme.fontSizes.medium};
          line-height: 32px;
        }
        ul {
          margin-top: 0;
          margin-bottom: ${theme.spacing.standard}px;
          padding: 0;
        }
        b {
          font-family: 'Helvetica';
        }
        hr {
          border-top: 0.5px solid ${theme.colors.Transparent.Black07};
          border-bottom: 0.5px solid ${theme.colors.Transparent.Black07};
          height: 0;
          margin: 0;
        }
        select {
          font-family: ${theme.primaryFont};
          font-size: ${theme.baseFontSize};
        }
        .no-margin {
          margin: 0;
        }
        .initial-letter:first-letter {
          float: left;
          font-family: 'SangBleu Kingdom Regular';
          font-size: 3.052em;
          line-height: 0.942;
          padding: 3px 3px 0px 0;
        }
        .fade-in-enter {
          opacity: 0.01;
          transform: scale(1) translateY(20%);
        }
        .fade-in-enter-active {
          opacity: 1;
          transform: scale(1) translateY(0%);
          transition: all ${theme.transition};
        }
        .fade-in-exit {
          opacity: 1;
          transform: scale(1) translateY(0%);
        }
        .fade-in-exit-active {
          opacity: 0.01;
          transform: scale(1) translateY(20%);
          transition: all ${theme.transition};
        }
        #terms h1,
        #terms h2,
        #terms h3 {
          font-weight: bold;
        }
        #terms h1 {
          font-size: ${theme.fontSizes.x2large};
        }
        #terms h2 {
          font-size: ${theme.fontSizes.xlarge};
        }
        #terms h3 {
          font-size: ${theme.fontSizes.large};
        }
      `}
    />
  );
};

export default GlobalStyles;
