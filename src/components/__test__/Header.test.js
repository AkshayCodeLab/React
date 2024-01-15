import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
// Unit testing Header component in isolation
it('Should Load head component with the login Button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Quering
  const button = screen.getByRole('button', { name: 'Login' });

  //Assertion
  expect(button).toBeInTheDocument();
});

it('Should Load Cart with Items 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Quering
  const button = screen.getByText('Cart (0 items)');

  //Assertion
  expect(button).toBeInTheDocument();
});

it('Should change Login button to Logout on Click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Quering
  const loginButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button', { name: 'Logout' });

  //Assertion
  expect(logoutButton).toBeInTheDocument();
});
