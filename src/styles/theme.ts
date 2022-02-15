import { darken, invert } from "polished";

/**
 * I am the palletes neutral colors
 */
const neutrals = {
  black: '#040404',
  black2: '#0f0f0f',
  black3: '#191818',
  black4: '#262728',
  gray: '#494949',
  gray2: '#727272',
  gray3: '#c4c4cc',
  white: '#e2e2e2',
  white2: '#fcfcfc',
  white3: '#ffffff',
}

/**
 * I am a color palette.
 */
const colors = {
  primary: '#1D70B7',
  primaryDark: darken(0.1, '#1D70B7'),
  secondary: '#E20613',
  secondaryDark: darken('#E20613'),
  red: "#e25656",
  green: "#74c174",
  ...neutrals
};

/**
 * neutrals from dark theme
 */
const darkNeutrals = {
  neutral: neutrals.black,
  neutral2: neutrals.black2,
  neutral3: neutrals.black3,
  neutral4: neutrals.black4,
  neutral5: neutrals.gray,
  neutral6: neutrals.gray2,
  neutral7: neutrals.gray3,
  neutral8: neutrals.white,
  neutral9: neutrals.white2,
  neutral10: neutrals.white3,
  background: neutrals.black4
}

const lightNeutrals = {
  neutral: invert(neutrals.black),
  neutral2: invert(neutrals.black2),
  neutral3: invert(neutrals.black3),
  neutral4: invert(neutrals.black4),
  neutral5: invert(neutrals.gray),
  neutral6: invert(neutrals.gray2),
  neutral7: invert(neutrals.gray3),
  neutral8: invert(neutrals.white),
  neutral9: invert(neutrals.white2),
  neutral10: invert(neutrals.white),
  background: neutrals.white2
}

/**
 * I am the theme's gradients
 */
const gradients = {
  primaryToSecondary: `linear-gradient(100deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,

};

/**
 * I am the theme's configs
 */
const configs = {
  hover: 'filter: brightness(0.8)'
}


/**
 * I am a fonts list.
 */
const fonts = {
  weight: {
    bold: 500,
    bolder: 700,
    medium: 400,
  },
  primary: '"Poppins", Roboto, sans-serif'
};


/**
 * I am a application default theme.
 */
const defaultTheme = {
  primary: colors.primary,
  secondary: colors.secondary,
  colors,
  configs,
  gradients,
  fonts
};

/**
 * I am the animation variants.
 */
const ease = [0.43, 0.13, 0.23, 0.96];

export const variants = {
  initial: {
    opacity: 0,
    transition: { ease, duration: 0.3 },
    y: '-20px'
  },
  animate: {
    opacity: 1,
    transition: { ease, duration: 0.5 },
    y: 0
  },
  exit: {
    opacity: 0,
    transition: { ease, duration: 0.1 },
    y: '-20px'
  }
};

export const darkTheme = {
  ...defaultTheme,
  ...darkNeutrals
}

export const lightTheme = {
  ...defaultTheme,
  ...lightNeutrals
}