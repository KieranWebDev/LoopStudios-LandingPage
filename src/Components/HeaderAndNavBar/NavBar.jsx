import './NavBar.css';
import Logo from '../../assets/images/logo.svg';
import Hamburger from '../../assets/images/icon-hamburger.svg';

export default function NavBar() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="Loop Studios" />
      <button>
        <img className="hamburger" src={Hamburger} alt="menu button" />
      </button>
    </nav>
  );
}
