import React from 'react';
import './SpecialMenu.css';
import images from '../../constants/images';

const SpecialMenu = () => {
  return (
    <div className="menu__timeline">
      {/* Signature Coffee Section */}
      <div className='menu_content'>
        <div className='menu__text'>
          <p className='menu__header'>Signature Coffee</p>
        </div>
        <div className='menu__images'>
          <img className='menu__image' src={images.drink1} alt="Signature Coffee 1" />
          <img className='menu__image' src={images.drink2} alt="Signature Coffee 2" />
          <img className='menu__image' src={images.drink3} alt="Signature Coffee 3" />
          <img className='menu__image' src={images.drink4} alt="Signature Coffee 4" />
          <img className='menu__image' src={images.drink5} alt="Signature Coffee 5" />
        </div>
      </div>

      {/* Cold Brew Section */}
      <div className='menu_content'>
        <div className='menu__text'>
          <p className='menu__header'>Cold Brew</p>
        </div>
        <div className='menu__images'>
          <img className='menu__image' src={images.drink6} alt="Cold Brew 1" />
          <img className='menu__image' src={images.drink7} alt="Cold Brew 2" />
        </div>
      </div>

      {/* Matcha & Hojicha Section */}
      <div className='menu_content'>
        <div className='menu__text'>
          <p className='menu__header'>Matcha & Hojicha</p>
        </div>
        <div className='menu__images'>
          <img className='menu__image' src={images.drink8} alt="Matcha & Hojicha 1" />
          <img className='menu__image' src={images.drink9} alt="Matcha & Hojicha 2" />
          <img className='menu__image' src={images.drink10} alt="Matcha & Hojicha 3" />
          <img className='menu__image' src={images.drink11} alt="Matcha & Hojicha 4" />
          <img className='menu__image' src={images.drink12} alt="Matcha & Hojicha 5" />
        </div>
      </div>

      {/* Dessert */}
      <div className='menu_content'>
        <div className='menu__text'>
          <p className='menu__header'>Dessert</p>
        </div>
        <div className='menu__images'>
          <img className='menu__image' src={images.drink8} alt="Matcha & Hojicha 1" />
          <img className='menu__image' src={images.drink9} alt="Matcha & Hojicha 2" />
          <img className='menu__image' src={images.drink10} alt="Matcha & Hojicha 3" />
          <img className='menu__image' src={images.drink11} alt="Matcha & Hojicha 4" />
          <img className='menu__image' src={images.drink12} alt="Matcha & Hojicha 5" />
        </div>
      </div>
      

    </div>
  );
};

export default SpecialMenu;
