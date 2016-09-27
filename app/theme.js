import {
  amber500, amber600, amber700,
  yellow100, yellow500, yellow700,
  grey600, grey900, grey50, grey200,
} from 'material-ui/styles/colors';

import {
  primary1Color, accent1Color, textColor, toolbarColor
} from 'theme/colors.js';

// https://www.materialpalette.com/yellow/blue
export default {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color,
    primary2Color: primary1Color,
    primary3Color: primary1Color,
    accent1Color,
    accent2Color: accent1Color,
    accent3Color: accent1Color,
    textColor,
    secondaryTextColor: grey600,
    alternateTextColor: grey900,
  },
  flatButton: {
    color: amber500,
  },
  paper: {
    backgroundColor: grey50,
  },
  toggle: {
    thumbOffColor: grey200,
  },
};
