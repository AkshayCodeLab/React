import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import cartSlice from '../utils/cartSlice';
const Header = () => {
  const [buttonVar, setButtonVar] = useState('Login');
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center bg-pink-100 dark:bg-gray-800 shadow-lg p-4">
      {/* Logo Container */}
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-48 h-12 object-contain hover:opacity-75 transition duration-300"
            src={LOGO_URL}
            alt="Logo"
          />
        </Link>
      </div>
      {/* Navigation and User Actions */}
      <div className="flex items-center">
        <ul className="flex space-x-4">
          <li className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition duration-300 ease-in-out">
            {onlineStatus ? (
              <span role="img" aria-label="Online">
                🌐
              </span>
            ) : (
              <span role="img" aria-label="Offline">
                🚫
              </span>
            )}
          </li>
          <li className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition duration-300 ease-in-out">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition duration-300 ease-in-out">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition duration-300 ease-in-out">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition duration-300 ease-in-out font-bold">
            <Link to="/cart"> Cart ({cart.length} items) </Link>
          </li>

          <li>
            <button
              onClick={() => {
                setButtonVar((prevVar) =>
                  prevVar === 'Login' ? 'Logout' : 'Login'
                );
              }}
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              {buttonVar}
            </button>
          </li>
          <li className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition duration-300 ease-in-out font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
