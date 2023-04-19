import { useState } from 'react';
// styles
import './NavBar.css';
// images
import Logo from '../../assets/images/logo.svg';
import Hamburger from '../../assets/images/icon-hamburger.svg';
import Close from '../../assets/images/icon-close.svg';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={isOpen ? 'mobile-menu' : ''}>
      <div className="logo-and-hamburger">
        <img className="logo" src={Logo} alt="Loop Studios" />
        <button onClick={toggleMenu} className="hamburger">
          <img src={isOpen ? Close : Hamburger} alt="menu button" />
        </button>
      </div>
      <ul className={isOpen ? 'mobile-links' : 'desktop-links'}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  );
}
