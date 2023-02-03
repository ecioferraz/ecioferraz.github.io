import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid ${theme.colors.primaryColor};
    box-shadow: ${theme.colors.secondaryColor} 0 3px 0 0,
      ${theme.colors.primaryColor} 0 3px 0 1px;
    box-sizing: border-box;
    display: flex;
    height: ${theme.spacings.xlarge};
    justify-content: space-between;
    overflow: auto;
    padding: 0 ${theme.spacings.xsmall};
    position: sticky;
    top: 0;

    svg {
      color: ${theme.colors.secondaryColor}
    }
  `}
`;

export const NavContainer = styled.nav`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-around;

    > * {
      margin: 0 ${theme.spacings.xsmall};
      white-space: nowrap;
    }
  `}
`;

export const ContactContainer = styled.section`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;

    > * {
      margin: 0 ${theme.spacings.xsmall};
    }
  `}
`;
