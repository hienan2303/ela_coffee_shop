// Header.jsx
import React, { useState } from 'react';
import images from '../../constants/images';
import './Header.css';
import Footer from '../Footer/Footer'; // Import the Footer component
import { Link } from 'react-router-dom';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Example icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
  const images_fronter = [
    images.front1, 
    images.front2,
    images.front3,
    images.front4,

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images_fronter.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images_fronter.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className='app__header app__wrapper section__padding' id='home'>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img src={images_fronter[currentIndex]}  className='full-width-image'/>
        <button onClick={handlePrevious} style={{background: 'none',border: 'none', cursor: 'pointer'}} >
            <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        </button>
        <button onClick={handleNext} style={{background: 'none', border: 'none', cursor: 'pointer', marginLeft: '20px'}}>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </button>
      </div>

        <div className='app__header-content'>
            <h1 className='app__header-h1'>Ela Cafè - The Roasted Chronicle</h1>
              {/*Section 1 */}        
                <p className="app__header-chapter" style={{ color: '#624B33', fontSize:'35px', fontFamily: "'Great Vibes', cursive", textAlign:'center'}}>Chapter 1: Amidst the Chaos - The Hidden Jewel</p>
                <p className="app__header-chapter">
                  Nằm ẩn mình trên một con phố yên tĩnh ở nội thành quận Ba Đình, Ela Café tọa lạc trong một tòa nhà cổ kính mang đậm dấu ấn kiến trúc Pháp.
                  Được xây dựng từ cuối thập niên 80, tòa nhà như một nhân chứng lịch sử, in hằn dấu vết thời gian với những bức tường rêu phong, những ô cửa sổ gỗ mang sắc màu trầm ấm, và những hoa văn trang trí tinh tế, 
                  đậm chất nghệ thuật của một thời đã qua. Vẻ đẹp hoài cổ này hòa quyện cùng sự phảng phất huyền bí của kiến trúc xưa cũ, tạo nên một không gian độc đáo, vừa sang trọng lại vừa gần gũi, bình yên.
                </p>
                <p className="app__header-chapter">
                Bước vào Ela Café, thực khách như được bước vào một thế giới khác, nơi thời gian như chậm lại, nhịp sống vội vã của đô thị dường như tan biến. 
                Từng góc nhỏ trong quán đều được thiết kế và bài trí cẩn thận, từ chiếc bàn gỗ mộc mạc, ánh đèn vàng ấm áp, cho đến những chậu cây xanh được đặt 
                tinh tế trên bậu cửa sổ. Tất cả đều góp phần mang đến một không gian đầy chất thơ, nơi mọi giác quan được đánh thức và tâm hồn được thư giãn.
                </p>
                <img className='app__header-img' src={images.Chapter1} alt="" />
                <img className='app__header-img' src={images.Chapter4} alt="" />

                <div class="button-container" style={{paddingBottom:'100px'}}>
                <Link to="/about">
                  <button className="about-us-btn" >
                    Ela's Story
                  </button>
                </Link>
              </div>

              {/*Section 2 */}        
              <p className="app__header-chapter" style={{ color: '#624B33', fontSize:'35px', fontFamily: "'Great Vibes', cursive",textAlign:'center'}}>Chapter 2: The Spark of Creativity</p>
              <p className="app__header-chapter">
                  Ela Café luôn nỗ lực không ngừng trong việc mang đến sự đa dạng và phong phú trong từng sản phẩm, giúp khách hàng có thêm nhiều lựa chọn phù hợp với sở thích và nhu cầu của mình. 
              
                  Mỗi sản phẩm được tạo ra tại Ela không chỉ là kết quả của sự sáng tạo mà còn là cả một quá trình chăm chút tỉ mỉ, thể hiện tâm huyết và niềm đam mê của từng thành viên trong đại gia đình Ela.
              </p>
              <p className="app__header-chapter">
                  Chúng tôi tin rằng, một tách cà phê ngon không chỉ dừng lại ở hương vị đậm đà, mà còn mang đến cho khách hàng một trải nghiệm tinh tế và đáng nhớ. Từng hạt cà phê được lựa chọn kỹ lưỡng 
                  từ các nguồn nguyên liệu chất lượng cao, trải qua quy trình rang xay công phu để giữ trọn vẹn hương thơm tự nhiên và vị ngon thuần khiết.
              </p>
              <img className='app__header-img' src={images.Chapter2} alt="" />
              <img className='app__header-img' src={images.Chapter5} alt="" />

              <div class="button-container" style={{paddingBottom:'100px'}}>
                <Link to="/about">
                  <button className="about-us-btn" >
                    Ela's Menu
                  </button>
                </Link>
              </div>

              {/*Section 3 */}        
              <p className="app__header-chapter" style={{ color: '#624B33', fontSize:'35px', fontFamily: "'Great Vibes', cursive",textAlign:'center'}}>Chapter 3: A Moment of Warmth in Every Sip </p>
              <p className="app__header-chapter">
                Việt Nam từ lâu đã nổi tiếng là quê hương của những loại cà phê ngon và hảo hạng bậc nhất thế giới. Được thiên nhiên ưu ái ban tặng điều kiện khí hậu và 
                thổ nhưỡng lý tưởng, hạt cà phê Việt Nam mang hương vị đậm đà, phong phú và đặc trưng mà ít nơi nào có thể sánh bằng. Không có gì phải bàn cãi khi nói\
                rằng chất lượng cà phê Việt Nam hoàn toàn có thể đặt lên bàn cân với bất kỳ ly cà phê thượng hạng nào từ khắp nơi trên thế giới.
              </p>

              <p className="app__header-chapter">
                Chính vì niềm tự hào đó, Ela Café luôn tự nhủ rằng mình phải có trách nhiệm lớn lao với từng ly cà phê được tạo ra. Từ khâu lựa chọn hạt cà phê chất lượng 
                cao, quy trình rang xay chuẩn mực, cho đến kỹ thuật pha chế đầy tâm huyết, Ela luôn đặt cái tâm và sự tỉ mỉ vào từng chi tiết nhỏ nhất. Mỗi ly cà phê 
                không chỉ là một thức uống đơn thuần, mà còn là thành quả của sự kết tinh giữa nghệ thuật, kỹ năng và tình yêu với cà phê.
              </p>

              <img className='app__header-img' src={images.Chapter3} alt="" />
              <img className='app__header-img' src={images.Chapter6} alt="" />

              <div class="button-container" style={{paddingBottom:'100px'}}>
                <Link to="/store">
                  <button className="about-us-btn" >
                    Ela's Store
                  </button>
                </Link>
              </div>

              {/*Section 3 */}        
              <p className="app__header-chapter" style={{ color: '#624B33', fontSize:'35px', fontFamily: "'Great Vibes', cursive",textAlign:'center'}}>Chapter 4: Teamwork makes the dream work </p>
              <p className="app__header-chapter">
                Trong mọi thành công lớn đều có dấu ấn của tinh thần đồng đội. Nếu như tài năng cá nhân có thể tỏa sáng rực rỡ, thì chính sự chung tay của cả một tập thể 
                mới biến ý tưởng thành hiện thực và giấc mơ thành những thành tựu đáng tự hào. Tại Ela Café, tinh thần đồng đội không chỉ là một khái niệm, mà còn là giá
                trị cốt lõi, kết nối mọi thành viên, truyền cảm hứng và tạo nên trải nghiệm tuyệt vời cho khách hàng mỗi ngày.
              </p>

              <p className="app__header-chapter">
                Mỗi thành viên của Ela Café đều mang đến những tài năng, kỹ năng và góc nhìn khác nhau. Dù là barista chăm chút từng ly cà phê, đầu bếp tỉ mỉ trong 
                từng chiếc bánh, hay đội ngũ thiết kế không gian ấm cúng, tất cả đều đóng một vai trò quan trọng. Chính sự đa dạng này đã tạo nên sự khác biệt của Ela 
                Café. Giống như một bản giao hưởng cần sự kết hợp của nhiều nhạc cụ để tạo nên giai điệu hài hòa, Ela phát triển nhờ vào sự cộng hưởng và gắn kết của 
                từng cá nhân trong đội ngũ.
              </p>

              <img className='app__header-img' src={images.Chapter7} alt="" />
              <img className='app__header-img' src={images.Chapter8} alt="" />

              <div class="button-container" style={{paddingBottom:'100px'}}>
                <Link to="/about">
                  <button className="about-us-btn" >
                    Ela's Team
                  </button>
                </Link>
              </div>

        </div>
      </div>
      <Footer/>

    </div>
  );
}  
export default Header;
