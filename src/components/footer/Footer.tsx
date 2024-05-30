import { ImInstagram } from "react-icons/im";
import "./Footer.scss";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__flex">
          <ul className="footer__links">
            <li>All rights reserved Fastbite &#xA9;</li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <span>Created by Jhonny Vargas</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <ul className="footer__links">
            <li>
              <a
                href=""
                className="facebook__logo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook color="blue" size={20} />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="instagram__logo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImInstagram color="#f66679" size={20} />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
