import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <NavLink className="header__logo" to="/" aria-label="Kasa - Accueil">
        Kasa
      </NavLink>
      <nav className="header__nav" aria-label="Navigation principale">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
