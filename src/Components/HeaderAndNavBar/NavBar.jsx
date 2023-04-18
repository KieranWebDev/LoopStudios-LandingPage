// styles
import './NavBar.css';
// images
import Logo from '../../assets/images/logo.svg';
import Hamburger from '../../assets/images/icon-hamburger.svg';

export default function NavBar() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="Loop Studios" />
      <button className="hamburger">
        <img src={Hamburger} alt="menu button" />
      </button>
      <ul className="menu">
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
