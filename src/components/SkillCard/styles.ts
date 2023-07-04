import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    align-items: center;
    align-self: baseline;
    display: flex;
    flex-direction: column;
    flex-shrink: 2;
    justify-content: center;
    margin-inline: ${theme.spacings.small};
    padding-inline: ${theme.spacings.large};
    width: 5rem;

    :hover {
      background: ${theme.colors.secondaryColor};
      scale: 1.1;

      @media ${theme.media.width.lteMedium} {
        * {
          font-size: ${theme.font.sizes.xsmall};
        }
      }
    }

    p {
      visibility: hidden;
      font-weight: 600;
      text-align: center;
    }

    :hover p {
      align-items: center;
      display: flex;
      justify-content: center;
      visibility: visible;
    }

    svg {
      margin-bottom: 0;
      width: ${theme.font.sizes.large};

      :hover {
        border-right: 0.1rem solid ${theme.colors.primaryColor};
        border-bottom: 0.1rem solid ${theme.colors.primaryColor};
        border-radius: 4px;
        box-shadow: ${theme.colors.secondaryColor} 0.3rem 0.3rem 0 0,
          ${theme.colors.primaryColor} 0.3rem 0.3rem 0.8rem 0.1rem;
        box-sizing: border-box;
      }

      @media ${theme.media.width.lteMedium} {
        width: ${theme.spacings.medium};
      }
    }
  `}
`;

