import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const [buttonVar, setButtonVar] = useState('Login');

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            {onlineStatus ? 'Online' : 'Offline'}
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li>
            <button
              onClick={() => {
                buttonVar === 'Login'
                  ? setButtonVar('Logout')
                  : setButtonVar('Login');
              }}
            >
              {buttonVar}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
