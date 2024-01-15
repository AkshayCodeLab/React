// Testing the cart flow feature: Clicking on an item will update the cart in the header and the cart page -> Testing this flow.

import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Restaurant from '../Restaurant';
import Header from '../Header';
import Cart from '../Cart';
import MOCK_DATA from '../mocks/mockResMenu.json';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it('should Load the Menu component', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Restaurant />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText('Recommended (20)');

  expect(accordianHeader).toBeInTheDocument();
  expect(screen.getByText('Cart (0 items)')).toBeInTheDocument();

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId('foodItems').length).toBe(20);
  //   const foodItems = screen.getAllByTestId('foodItems');

  const addbtns = screen.getAllByRole('button', { name: 'Add+' });
  expect(addbtns.length).toBe(20);

  fireEvent.click(addbtns[0]);
  expect(screen.getByText('Cart (1 items)')).toBeInTheDocument();

  fireEvent.click(addbtns[1]);
  expect(screen.getByText('Cart (2 items)')).toBeInTheDocument();

  expect(screen.getAllByTestId('foodItems').length).toBe(22);

  fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));
  expect(screen.getAllByTestId('foodItems').length).toBe(20);
  expect(screen.getByText('Cart is Empty')).toBeInTheDocument();
});
