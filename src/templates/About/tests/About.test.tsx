import renderTheme from '../../../styles/renderTheme';
import About from '..';

describe('<About />', () => {
  it('should render <About />', () => {
    const { container } = renderTheme(<About />);

    expect(container).toMatchSnapshot();
  });
});
