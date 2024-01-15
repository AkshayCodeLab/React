import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Body from '../Body';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from '../mocks/resListData.json';
import '@testing-library/jest-dom';
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('Should Search the cards with Burger', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const initialCards = screen.getAllByTestId('resCard');
  expect(initialCards.length).toBe(20);

  const searchButton = screen.getByRole('button', { name: 'Search' });
  const inputSearch = screen.getByTestId('searchInput');
  fireEvent.change(inputSearch, { target: { value: 'pizza' } });
  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId('resCard');

  expect(cardsAfterSearch.length).toBe(2);
});

it('Should Search the top rated restaurants', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRatedButton = screen.getByRole('button', {
    name: 'Top Rated',
  });
  const initialCards = screen.getAllByTestId('resCard');
  expect(initialCards.length).toBe(20);
  fireEvent.click(topRatedButton);

  const afterCards = screen.getAllByTestId('resCard');
  expect(afterCards.length).toBe(14);
});
