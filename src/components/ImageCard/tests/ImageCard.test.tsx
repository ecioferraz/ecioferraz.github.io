import renderTheme from '../../../styles/renderTheme';
import ImageCard from '..';
import { screen } from '@testing-library/react';

describe('<ImageCard />', () => {
  it('should render <ImageCard />', () => {
    renderTheme(
      <ImageCard
        alt="testAlt"
        src="https://source.unsplash.com/random/100x100?=1"
      />,
    );

    const imageCard = screen.getByRole('img', { name: 'testAlt' });

    expect(imageCard).toHaveAttribute(
      'src',
      'https://source.unsplash.com/random/100x100?=1',
    );
    expect(imageCard).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
      }

      <img
        alt="testAlt"
        class="c0"
        src="https://source.unsplash.com/random/100x100?=1"
      />
    `);
  });
});
