import colors from './colors';
const theme = {
  spacing: {
    xxsmall: 2,
    xsmall: 5,
    small: 8,
    standard: 24
  },

  /* Get the color palette from colors.js */
  colors,

  /* General theme settings */
  backgroundColor: colors.OffWhite,
  backgroundDarkColor: colors.Clay100,
  borderRadius: '4',
  transition: '300ms ease-out',

  breakpoints: {
    widgetUp: '@media (min-width: 300px)',
    mobileUp: '@media (min-width: 480px)',
    smallTabletUp: '@media (min-width: 600px)',
    tabletUp: '@media (min-width: 768px)',
    tabletLandscapeUp: '@media (min-width: 880px)',
    desktopUp: '@media (min-width: 1200px)',
    largeDesktopUp: '@media (min-width: 1440px)',
    desktopDown: '@media (max-width: 1200px)',
    tabletLandscapeDown: '@media (max-width: 880px)',
    tabletDown: '@media (max-width: 768px)',
    smallTabletDown: '@media (max-width: 600px)',
    mobileDown: '@media (max-width: 480px)'
  },

  /* Keyboard */
  keyboard: {
    borderRadius: 5
  },
  /* App header bar */
  headerHeight: '56',
  headerBackgroundColor: colors.OffWhite,

  /* Sidebar */
  sideBarWidth: '256',
  sideBarBackgroundColor: colors.Teal100,

  /* Typography */
  primaryFont: 'Helvetica',
  baseFontSize: '16px',
  fontSizes: {
    xxsmall: '0.8em',
    xsmall: '0.9em',
    small: '1.0em',
    medium: '1.25em',
    large: '1.563em',
    xlarge: '1.953125em',
    x2large: '2.441em',
    x3large: '3.051875em',
    x4large: '3.815em',
    x5large: '4.768em'
  },

  /* Text colors */
  primaryColor: colors.Transparent.Black80,
  primaryDarkColor: colors.Transparent.White98,
  secondaryColor: colors.Transparent.Black58,
  secondaryDarkColor: colors.Transparent.White80,

  /* Links */
  lightLinkColor: colors.Teal80,
  darkLinkColor: colors.Red100,
  lightLinkHoverColor: colors.Teal69,
  darkLinkHoverColor: colors.Red80,

  /* Buttons */
  primaryButton: {
    buttonColor: colors.Red80,
    borderColor: colors.Red100,
    textColor: colors.Transparent.White98,
    buttonHoverColor: colors.Red100,
    borderHoverColor: colors.Red100,
    textHoverColor: colors.White,
    buttonActiveColor: colors.Red80,
    borderActiveColor: colors.Red100,
    textActiveColor: colors.Transparent.White86
  },

  flatLightButton: {
    textColor: colors.Red100,
    textHoverColor: colors.Red80,
    textActiveColor: colors.Red100
  },

  flatDarkButton: {
    textColor: colors.Turquoise100,
    textHoverColor: colors.Turquoise60,
    textActiveColor: colors.Turquoise100
  },

  inputSizes: {
    xsmall: 3,
    small: 6,
    medium: 8,
    large: 15
  }
};

export default theme;
