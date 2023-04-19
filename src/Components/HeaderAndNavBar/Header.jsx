import NavBar from './NavBar.jsx';
// styles
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <NavBar />
        <div className="main-heading">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </div>
    </header>
  );
}
