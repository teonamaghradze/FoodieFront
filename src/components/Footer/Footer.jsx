import logo from "../../assets/images/res-logo.png";
import "./Footer.scss";
import google from "../../assets/images/g-solid.svg";
import fb from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin (1).svg";
import insta from "../../assets/images/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-section">
        <h5>Company</h5>
        <div className="logo-container">
          <img src={logo} alt="" />
          <p>
            Foo<span>die</span>
          </p>
        </div>

        <p className="description">
          Seamless indulgence awaits on our food delivery website where culinary
          cravings meet convenience, bringing exceptional flavors.
        </p>

        <div className="socials">
          <img src={google} alt="" />
          <img src={linkedin} alt="" />
          <img src={insta} alt="" />
          <img src={fb} alt="" />
        </div>
      </section>

      <section className="footer-section">
        <h5>Help</h5>
        <p>Contact Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </section>

      <section className="footer-section">
        <h5>Legal</h5>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Refund & Cancellation</p>
        <p>Cookie Policy</p>
        <p>Offer Terms</p>
      </section>
      <section className="footer-section">
        <h5>List</h5>
        <p>Contact Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Features</p>
        <p>Blogs</p>
      </section>
    </footer>
  );
}

export default Footer;
