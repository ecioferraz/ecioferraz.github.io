import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    @media ${theme.media.height.lteSmall} {
      height: 100%;
    }

    @media ${theme.media.height.lteMedium} {
      h1 {
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`;

export const ProjectsContainer = styled.section`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
