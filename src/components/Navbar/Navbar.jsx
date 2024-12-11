import React, { useState } from 'react';
import images from '../../constants/images';
import { FaHome, FaInfoCircle, FaCoffee, FaMapMarkerAlt, FaFileContract } from 'react-icons/fa';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/"><FaHome /> Ela's Home</Link></li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/about"><FaInfoCircle /> Ela's Story</Link></li>
        <li className="p__opensans dropdown" style={{ color: '#624B33' }}>
          <Link to="/menu"><FaCoffee /> Ela's Menu </Link>
          <div className="dropdown-menu">
            <Link to="/breakfast" className="dropdown-item">Cà Phê</Link>
            <Link to="/lunch" className="dropdown-item">Trà</Link>
            <Link to="/dinner" className="dropdown-item">Tráng Miệng</Link>
            <Link to="/desserts" className="dropdown-item">Bánh Ngọt</Link>
          </div>
        </li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/contact"><FaFileContract /> Ela's Moment </Link></li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/contact"><FaFileContract /> Ela's Team </Link></li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/contact"><FaFileContract /> Ela's Store</Link></li>


      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}><FaHome /> Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}><FaInfoCircle /> About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}><FaCoffee /> Menu</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}><FaFileContract /> Contact</a></li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
