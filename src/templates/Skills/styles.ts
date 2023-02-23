import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
    color: ${theme.colors.primaryColor};

    * {
      transition: 0.8s all ease-in-out;
    }

    @media ${theme.media.height.lteMedium} {
      h1 {
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`;

export const SkillsContainer = styled.section`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: ${theme.spacings.medium};

    @media ${theme.media.height.lteMedium}
    and ${theme.media.width.lteMedium} {
      height: 100%;

      * {
        width: ${theme.font.sizes.small};
      }
    }
  `}
`;
