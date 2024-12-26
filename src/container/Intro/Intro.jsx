import React from 'react';
import './Intro.css';
import { images } from '../../constants';
import { Link } from 'react-router-dom';


const Intro = () => {

  return (
    <div className="intro__timeline">
      <div className='intro__image-vertical'>
        <Link to="/header">
          <img src={images.Home} alt="/header" />
        </Link>   
        <Link to="/menu">
          <img src={images.MenuPage} alt="/menu" />
        </Link>   
        <Link to="/about">
          <img src={images.AboutPage} alt="/about" />
        </Link>   
      </div> 
      <div className='intro__image-vertical-wide'>
        <Link to="/about">
          <img src={images.Story} alt="/about" />
        </Link>     
        <Link to="/store">
          <img src={images.Store} alt="/store" />
        </Link>   
      </div> 
    </div>
  );
};

export default Intro;
