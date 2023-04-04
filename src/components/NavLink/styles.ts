import styled, { css } from 'styled-components';

export const Container = styled.li`
  list-style: none;
`;

export const LinkContainer = styled.a`
  ${({ theme }) => css`
    background: none;
    cursor: pointer;
    color: ${theme.colors.secondaryColor};
    font-weight: 500;
    position: relative;
    text-decoration: none;


    ::before {
      border-bottom: 0.2rem solid rgba(255,255,255,0.5);
      bottom: 0;
      content: '';
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      scale: 0.1, 1;
      width: 100%;
      z-index: 1;
    }

    :hover {
      letter-spacing: 0.2rem;
    }

    :hover::before {
      opacity: 1;
      scale: 1, 1;
    }

    ::after {
      bottom: 0;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: 1;
    }

    :hover::after {
      opacity: 0;
      scale: 0.1, 1;
    }
  `}
`;
