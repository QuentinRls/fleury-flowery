const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p>&copy; {new Date().getFullYear()} Fleuri Flowery. Hak cipta dilindungi.</p>
          <div className="footer__social">
            <a href="https://www.instagram.com/fleuri.flowery" target="_blank" rel="noopener noreferrer" className="social-link" title="Follow us on Instagram">
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
