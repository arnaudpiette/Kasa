import footerLogo from '../../assets/Icons/Logo-footer.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={footerLogo} alt="Kasa" />
      <p>
        © 2020 Kasa. <span className="footer__copyright-line">All rights reserved</span>
      </p>
    </footer>
  );
}

export default Footer;
