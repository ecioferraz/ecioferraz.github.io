import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      font-family: ${theme.font.family.default};
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.secondaryColor};
      font-family: ${theme.font.family.default};
      font-size: ${theme.font.sizes.small};
    }

    main {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30rem;
      min-height: 100vh;

      @media ${theme.media.width.lteXHuge} {
        padding: ${theme.spacings.large} ${theme.spacings.xxlarge};
      }
    }

    h1, h2, h3, h4, h5, h6 {
      margin: ${theme.spacings.medium} 0;
    }

    p {
      margin: ${theme.spacings.small} 0;
    }

    .slideInDown {
      -webkit-animation-name: slideInDown;
      animation-name: slideInDown;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }

    @-webkit-keyframes slideInDown {
      0% {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        visibility: visible;
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }

    @keyframes slideInDown {
      0% {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        visibility: visible;
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }

    .slideInRight {
      -webkit-animation-name: slideInRight;
      animation-name: slideInRight;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }

    @-webkit-keyframes slideInRight {
      0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        visibility: visible;
      }

      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        visibility: visible;
      }

      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
    }
  `}
`;
