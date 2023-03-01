export const theme = {
  colors: {
    primaryColor: '#000',
    secondaryColor: '#FFF',
  },
  font: {
    family: {
      default: '"Quicksand", sans-serif',
    },
    sizes: {
      xsmall: '0.9rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    height: {
      gteSmall: '(min-height: 540px)',
      gteMedium: '(min-height: 768px',
      gteXSmall: '(min-height: 375px)',
      lteSmall: '(max-height: 540px)',
      lteMedium: '(max-height: 768px)',
      lteXSmall: '(max-height: 375px)',
    },
    width: {
      gteMedium: '(min-width: 768px)',
      lteHuge: '(max-width: 1280px)',
      lteLarge: '(max-width: 846px)',
      lteMedium: '(max-width: 768px)',
      lteXHuge: '(max-width: 1368px)',
    },
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
