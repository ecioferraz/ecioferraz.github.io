import renderTheme from '../../../styles/renderTheme';
import ProjectCard from '..';

describe('<ProjectCard />', () => {
  it('should render <ProjectCard />', () => {
    const { container } = renderTheme(
      <ProjectCard
        imgSrc="testImgSrc"
        mainURL="testMainURL"
        secondaryURL="testSecondaryURL"
        title="testTitle"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
