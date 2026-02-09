import "../css/footer.css";

// Placeholder assets - replace with actual footer assets later
const FooterBg = "/assets/Footer/Footer bg.png";
const Wordmark = "/assets/Footer/wordmark.png";
const Doraemon = "/assets/Footer/Doraemon.png";
const Pikachu = "/assets/Footer/pikachu.png";
const Linkedin = "/assets/Footer/linkedIn_Icon.svg";
const Insta = "/assets/Footer/Insta_Icon.svg";
const Discord = "/assets/Footer/Discord_icon.svg";

function Footer() {
  return (
    <footer id="register" className="footer">
      <img src={FooterBg} className="footer-bg" alt="Footer background" />

      {/*  Nav */}
      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#timeline">Timeline</a>
        <a href="#sponsors">Our Sponsors</a>
        <a href="#events">Past Events</a>
      </nav>

      {/* Characters */}
      <img src={Doraemon} className="footer-doraemon" alt="Doraemon" />
      <img src={Pikachu} className="footer-pikachu" alt="Pikachu" />

      {/* Center*/}
      <div className="footer-center">
        <img src={Wordmark} className="footer-wordmark" alt="CAD 4.0" />

        <a href="#register">
          <button className="footer-register-btn">REGISTER</button>
        </a>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/company/coding-ninjas-club-srm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="LinkedIn" />
          </a>

          <a
            href="https://www.instagram.com/srm_cn?igsh=bng3ajU4aXFlYmRx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Insta} alt="Instagram" />
          </a>

          <a href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
            <img src={Discord} alt="Discord" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;