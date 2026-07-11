import { NavLink } from 'react-router-dom';
import headerLogo from '../assets/Icons/Logo-header.png';

function Header() {
  return (
    <header className="header">
      <NavLink className="header__logo" to="/" aria-label="Kasa - Accueil">
        <img src={headerLogo} alt="" />
      </NavLink>
      <nav className="header__nav" aria-label="Navigation principale">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
