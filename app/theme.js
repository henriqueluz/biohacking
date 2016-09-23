import {
  amber500, amber600, amber700,
  yellow100, yellow500, yellow600, yellow700,
  grey600, grey900, grey50, grey200,
} from 'material-ui/styles/colors';

// https://www.materialpalette.com/yellow/blue
export default {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: yellow500,
    primary2Color: yellow700,
    primary3Color: yellow100,
    accent1Color: amber500,
    accent2Color: amber700,
    accent3Color: amber600,
    textColor: grey900,
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
