import { darken, invert } from "polished";

/**
 * I am the palletes neutral colors
 */
const neutrals = {
  black: '#1a1a1a',
  black2: '#333333',
  black3: '#4d4d4d',
  black4: '#666666',
  gray: '#808080',
  gray2: '#999999',
  gray3: '#b3b3b3',
  white: '#cccccc',
  white2: '#e5e5e5',
  white3: '#fcfcfc',
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
  yellow: "#f7e331",
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
  background: neutrals.black
}

const lightNeutrals = {
  neutral10: neutrals.black,
  neutral9: neutrals.black2,
  neutral8: neutrals.black3,
  neutral7: neutrals.black4,
  neutral6: neutrals.gray,
  neutral5: neutrals.gray2,
  neutral4: neutrals.gray3,
  neutral3: neutrals.white,
  neutral2: neutrals.white2,
  neutral: neutrals.white3,
  background: neutrals.white3
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
  primary: '"Raleway", Roboto, sans-serif'
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