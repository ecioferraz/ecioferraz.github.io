import renderTheme from '../../../styles/renderTheme';
import SkillCard from '..';

describe('<SkillCard />', () => {
  it('should render <SkillCard />', () => {
    const { container } = renderTheme(<SkillCard icon="iconTest" title="titleTest" />);

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-size: 1.6rem;
      }

      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-flex-shrink: 2;
        -ms-flex-negative: 2;
        flex-shrink: 2;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 1.6rem;
        width: 5rem;
      }

      .c0:hover {
        background: #FFF;
        padding: 0.8rem;
        scale: 1.1;
      }

      .c0 p {
        display: none;
        font-weight: 600;
        text-align: center;
      }

      .c0:hover p {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c0 svg {
        margin-bottom: 0;
        width: 3.2rem;
      }

      .c0 svg:hover {
        border-right: 0.1rem solid #000;
        border-bottom: 0.1rem solid #000;
        border-radius: 4px;
        box-shadow: #FFF 0.3rem 0.3rem 0 0, #000 0.3rem 0.3rem 0.8rem 0.1rem;
        box-sizing: border-box;
      }

      @media (max-width:768px) {
        .c0:hover * {
          font-size: 0.9rem;
        }
      }

      @media (max-width:768px) {
        .c0 svg {
          width: 2.4rem;
        }
      }

      <div>
        <section
          class="c0"
        >
          iconTest
          <p
            class="c1"
          >
            titleTest
          </p>
        </section>
      </div>
    `);
  });
});
