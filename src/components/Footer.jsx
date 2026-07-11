import footerLogo from '../assets/Icons/Logo-footer.png';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={footerLogo} alt="Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
