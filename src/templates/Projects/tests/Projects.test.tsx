import renderTheme from '../../../styles/renderTheme';
import Projects from '..';

describe('<Projects />', () => {
  it('should render <Projects />', () => {
    const { container } = renderTheme(<Projects />);

    expect(container).toMatchSnapshot();
  });
});
