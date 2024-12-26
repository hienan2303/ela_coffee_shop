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
        <Link to="/">
          <img src={images.logo} alt="logo" />
        </Link>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/header"><FaHome /> Trang Chủ</Link></li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/about"><FaInfoCircle /> Chuyện nhà Ela</Link></li>
        <li className="p__opensans dropdown" style={{ color: '#624B33' }}>
          <Link to="/menu"><FaCoffee /> Thực đơn </Link>
        </li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/team"><FaFileContract /> Phản Hồi</Link></li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/store"><FaFileContract /> Cửa hàng</Link></li>


      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/header"><FaHome /> Trang Chủ</Link></li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/about"><FaInfoCircle /> Chuyện nhà Ela</Link></li>
        <li className="p__opensans dropdown" style={{ color: '#624B33' }}>
          <Link to="/menu"><FaCoffee /> Thực đơn </Link>
        </li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/team"><FaFileContract /> Phản Hồi</Link></li>
        <li className="p__opensans" style={{ color: '#624B33' }}><Link to="/store"><FaFileContract /> Cửa hàng</Link></li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
