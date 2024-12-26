import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Liên hệ</h1>
        <p className="p__opensans">10 Khúc Hạo, Ba Đình, Hà Nội</p>
        <p className="p__opensans">+84 91 395 99 33</p>
        <p className="p__opensans">elakhuchao@gmail.com</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.footer} alt="footer_logo" style={{marginTop: '-50px'}} />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/elacafee" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/ela.khuchao/" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>


      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Eveyday:</p>
        <p className="p__opensans">08:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Ela Cafè . All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;