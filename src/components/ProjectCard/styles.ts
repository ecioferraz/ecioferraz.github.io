import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor};
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    margin: 0.8rem;
    max-height: 20rem;
    max-width: 27rem;
    overflow: hidden;

    :hover {
      scale: 1.05;
    }

    @media only screen and ${theme.media.width.lteHuge} {
      max-height: 18rem;
      max-width: 22rem;
    }
  `}
`;

export const ContainerBody = styled.section`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.primaryColor};
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    padding: 0 1.2rem;
    text-align: center;

    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      margin: 0;
      white-space: nowrap;
    }
  `}
`;
