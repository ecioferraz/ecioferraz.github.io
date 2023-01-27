import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    margin: 0;


    svg {
      color: ${theme.colors.primaryColor};
      width: 2rem;
    }

    svg:hover {
      scale: 1.3;
    }
  `}
`;
