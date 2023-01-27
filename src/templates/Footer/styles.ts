import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.secondaryColor};
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    position: sticky;
    text-align: end;

    * {
      color: ${theme.colors.primaryColor};
      margin: 0;
      text-decoration: none;
    }

    @media ${theme.media.width.lteMedium} {
      p {
        font-size: ${theme.font.sizes.xsmall};
      }
    }

    > a > * {
      margin: 0 0.3rem
    }
  `}
`;
