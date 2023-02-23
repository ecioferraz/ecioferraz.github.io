import renderTheme from '../../../styles/renderTheme';
import Footer from '..';
import { screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render <Footer />', () => {
    const { container } = renderTheme(<Footer />);

    expect(container).toMatchInlineSnapshot(`
      .c2 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      .c1 {
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

      .c1 svg {
        color: #000;
        width: 2rem;
      }

      .c1 svg:hover {
        scale: 1.3;
      }

      .c3 {
        font-size: 1.6rem;
      }

      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #FFF;
        box-shadow: #000 0 -3px 10px;
        bottom: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 1rem;
        position: -webkit-sticky;
        position: sticky;
        text-align: end;
      }

      .c0 * {
        color: #000;
        margin: 0;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 > a > * {
        margin: 0 0.3rem;
      }

      @media (max-width:768px) {
        .c0 p {
          font-size: 0.9rem;
        }
      }

      <div>
        <footer
          class="c0"
        >
          <a
            class="c1"
            href="mailto:ecioferraz@gmail.com"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              class="c2"
              fill="currentColor"
              focusable="false"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1.574 5.286 7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z"
              />
            </svg>
            <p
              class="c3"
            >
              ecioferraz@gmail.com
            </p>
          </a>
          <p
            class="c3"
          >
            Criado com React, Styled Components e Vite.
          </p>
        </footer>
      </div>
    `);
  });
});
