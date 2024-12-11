// Header.jsx
import React, { useState } from 'react';
import images from '../../constants/images';
import { FaArrowLeft, FaArrowRight, FaSquare} from 'react-icons/fa';
import './Header.css';
import { intro } from '../../constants';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  const [currentImage, setCurrentImage] = useState(images.Header1);

  const nextImage = () => {
    if (currentImage === images.Header1) {
      setCurrentImage(images.Header2);
    } else if (currentImage === images.Header2) {
      setCurrentImage(images.Header3);
    } else {
      setCurrentImage(images.Header1);  // Loop back to the first image
    }
  };
  
  const prevImage = () => {
    if (currentImage === images.Header3) {
      setCurrentImage(images.Header2);  // Go to image 2 from image 3
    } else if (currentImage === images.Header2) {
      setCurrentImage(images.Header1);  // Go to image 1 from image 2
    } else {
      setCurrentImage(images.Header3);  // Loop back to the third image
    }
  };

  const [currentImageFronter, setCurrentImageFronter] = useState('front2'); // State to track the current image

  const nextImageFronter = () => {
    setCurrentImageFronter((prevImage) =>
      prevImage === 'front1' ? 'front2' : 'front1'
    );
  };
  
  const prevImageFronter = () => {
    setCurrentImageFronter((prevImage) =>
      prevImage === 'front1' ? 'front2' : 'front1'
    );
  };
  

  return (
    <div>
      {/* Section 1 */}
      <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__header-content'>
            <h1 className='app__header-h1' style={{marginTop:'-50px'}}>Ela Cafè - The Roasted Chronicle</h1>
       
          <div className="app__header-img" style={{ marginTop: '50px', textAlign: 'center', position: 'relative' }}>
            <img src={currentImage} alt="Coffee" />
          </div>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={() => setCurrentImage(images.Header1)}><FaSquare /></button>
            <button className="nav-btn" onClick={() => setCurrentImage(images.Header2)}><FaSquare /></button>
            <button className="nav-btn" onClick={() => setCurrentImage(images.Header3)}><FaSquare /></button>
          </div>

          <Link to="/about">
            <button className="about-us-btn">
              Tìm hiểu thêm
            </button>
          </Link>
        </div>
      </div>

  
    </div>
  );
}  
export default Header;
