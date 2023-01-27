import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import NavLink from '..';
import { screen } from '@testing-library/react';

describe('<NavLink />', () => {
  it('should render <NavLink />', () => {
    renderTheme(<NavLink src="#">NavLink</NavLink>);

    const navLink = screen.getByText('NavLink').closest('a');

    expect(navLink).toHaveAttribute('href', '#');
    expect(navLink).toMatchInlineSnapshot(`
      .c0 {
        background: none;
        cursor: pointer;
        color: #FFF;
        font-weight: 500;
        position: relative;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0::before {
        border-bottom: 0.2rem solid rgba(255,255,255,0.5);
        bottom: 0;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        scale: 0.1,1;
        width: 100%;
        z-index: 1;
      }

      .c0:hover {
        -webkit-letter-spacing: 0.2rem;
        -moz-letter-spacing: 0.2rem;
        -ms-letter-spacing: 0.2rem;
        letter-spacing: 0.2rem;
      }

      .c0:hover::before {
        opacity: 1;
        scale: 1,1;
      }

      .c0::after {
        bottom: 0;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 1;
      }

      .c0:hover::after {
        opacity: 0;
        scale: 0.1,1;
      }

      <a
        class="c0"
        href="#"
        target="_self"
      >
        NavLink
      </a>
    `);
  });
});
