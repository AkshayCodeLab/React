import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const [buttonVar, setButtonVar] = useState('Login');

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? 'Online' : 'Offline'}</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
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
