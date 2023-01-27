import renderTheme from '../../../styles/renderTheme';
import Header from '..';

describe('<Header />', () => {
  it('should render <Header />', () => {
    const { container } = renderTheme(<Header />);

    expect(container).toMatchSnapshot();
  });
});
