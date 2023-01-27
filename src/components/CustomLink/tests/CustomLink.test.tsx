import renderTheme from '../../../styles/renderTheme';
import CustomLink  from '..';
import { screen } from '@testing-library/react';

describe('<CustomLink  />', () => {
  it('should render <CustomLink  />', () => {
    renderTheme(<CustomLink src='#'>CustomLink</CustomLink >);

    const customLink = screen.getByText('CustomLink').closest('a');

    expect(customLink).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        margin: 0;
      }

      .c0 svg {
        color: #000;
        width: 2rem;
      }

      .c0 svg:hover {
        scale: 1.3;
      }

      <a
        class="c0"
        href="#"
        target="_blank"
      >
        CustomLink
      </a>
    `);
  });
});
