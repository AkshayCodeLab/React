import { render, screen } from '@testing-library/react';
import RestaurantCard, { withVegLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';
it('Should load the RestaurantCard component', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const heading = screen.getByText("McDonald's");

  // Assertion
  expect(heading).toBeInTheDocument();
});

it('Should Load the Restaurant Card component with promoted label', () => {
  const RestaurantCardVeg = withVegLabel(RestaurantCard);
  render(<RestaurantCardVeg resData={MOCK_DATA} />);

  const labelled = screen.getByText('Veg');

  expect(labelled).toBeInTheDocument();
});
