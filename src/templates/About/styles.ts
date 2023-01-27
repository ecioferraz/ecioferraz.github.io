import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    @media ${theme.media.width.gteMedium} or (orientation: landscape) {
      flex-direction: row;
      justify-content: space-evenly;

      > * {
        margin: 0 ${theme.spacings.large};
      }
    }


    img {
      border-radius: ${theme.spacings.large};
      box-sizing: border-box;
      max-width: 20rem;

      @media ${theme.media.height.lteXSmall} and (orientation: landscape) {
        width: 12rem;
      }
    }
  `}
`;

export const AboutContainer = styled.section`
  ${({ theme }) => css`
    max-width: 50rem;

    h1 {
      margin-bottom: ${theme.spacings.xsmall};
    }

    p {
      text-align: justify;
    }

    @media ${theme.media.height.lteXSmall} and (orientation: landscape) {
      h1 {
        font-size: ${theme.font.sizes.medium};
        margin: 0;
      }

      p {
        font-size: ${theme.font.sizes.xsmall};
      }
    }
  `}
`;
