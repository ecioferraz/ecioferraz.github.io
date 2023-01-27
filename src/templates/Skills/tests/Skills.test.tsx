import renderTheme from '../../../styles/renderTheme';
import Skills from '..';

describe('<Skills />', () => {
  it('should render <Skills />', () => {
    const { container } = renderTheme(<Skills />);

    expect(container).toMatchSnapshot();
  });
});
