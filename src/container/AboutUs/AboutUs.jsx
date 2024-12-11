import React, { useState } from 'react';
import './AboutUs.css';
import Footer from '../Footer/Footer'; // Import the Footer component

const AboutUs = () => {

  return (
    <div className="app__aboutus">
      <h1 className="timeline__title" ></h1>
      <div className="timeline">

        {/* Section 1 */}
        <div className="timeline__container">
          <div className="timeline__content">
            <h1 className="headtext__cormorant" style={{color:'#624B33'}}>Quá trình thành lập</h1>
          </div>
        </div>

        {/* Section 2 */}
        <div className="timeline__container timeline__container-reverse">
          <div className="timeline__content">
            <h1 className="headtext__cormorant" style={{color:'#624B33'}}>Giá trị cốt lõi</h1>

          </div>
        </div>

        {/* Section 3 */}
        <div className="timeline__container">
          <div className="timeline__content" >
            <h1 className="headtext__cormorant" style={{maxWidth:'600px',color:'#624B33'}}>Cà phê ngon là chưa đủ</h1>

 
          </div>
        </div>

        {/* Section 4 */}
        <div className="timeline__container timeline__container-reverse">
          <div className="timeline__content">
            <h1 className="headtext__cormorant" style={{maxWidth:'600px',color:'#624B33'}}>Phục vụ là hướng tới khách hàng</h1>


          </div>
        </div>

        {/* Section 5 */}
        <div className="timeline__container">
          <div className="timeline__content">
            <h1 className="headtext__cormorant" style={{maxWidth:'600px',color:'#624B33'}}>Trách nhiệm với hạt cà phê Việt nam</h1>


          </div>
        </div>
      
      </div>

    </div>
  );
};

export default AboutUs;
