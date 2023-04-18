import NavBar from './NavBar.jsx';
// styles
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <NavBar />
        <h1>Header</h1>
      </div>
    </header>
  );
}
