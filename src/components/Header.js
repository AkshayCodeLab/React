import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
const Header = () => {
  const [buttonVar, setButtonVar] = useState('Login');

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
