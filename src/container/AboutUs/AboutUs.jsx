import React from 'react';
import './AboutUs.css';
import Footer from '../Footer/Footer'; // Import the Footer component
import images from '../../constants/images';

const AboutUs = () => {
  return (
    <div className="app__aboutus">
      <h1 className="app__title">Ela cafè</h1> 
      <div className="aboutus__section">
        <div className="aboutus__image">
          <img src={images.Story1} alt="Story 1" />
        </div>
        <div className="aboutus__text">
          <h1 className="app__headtext">Quá trình thành lập</h1>
          <p className="app__header-chapter ">
            Được thành lập vào năm 2021 sau đại dịch Covid-19, Ela Café là tâm huyết của những người đầy đam mê và sáng tạo, 
            với mong muốn mang đến cho thực khách những trải nghiệm tuyệt vời về không gian, thức uống và dịch vụ. 
            Mỗi ly cà phê tại Ela không chỉ là một thức uống mà còn là một tác phẩm nghệ thuật được chế biến tỉ mỉ, thể hiện sự tận tâm 
            và khéo léo của đội ngũ nhân viên. 
          </p>
          <p className="app__header-chapter">
            Ela Café không chỉ là nơi để thưởng thức cà phê mà còn là không gian lý tưởng để thư giãn, 
            trò chuyện và tìm lại những phút giây bình yên trong cuộc sống bận rộn.
          </p>
        </div>
      </div>

      <div className="aboutus__section">
        <div className="aboutus__text">
          <h1 className="app__headtext" >Giá trị cốt lõi</h1>
          <p className="app__header-chapter">
            Giá trị cốt lõi của Ela Café được xây dựng từ những nguyên tắc vững chắc, định hướng vào sự phát triển bền vững
            và tạo ra những trải nghiệm tốt nhất cho khách hàng:
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>1. Chất lượng tuyệt hảo:</strong> Mỗi sản phẩm tại Ela Café đều được tạo ra từ nguyên liệu tốt nhất, 
            đảm bảo chất lượng tuyệt đối để mang đến cho khách hàng những ly cà phê thơm ngon và đậm đà.
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>2. Tận tâm phục vụ</strong> Chúng tôi luôn đặt khách hàng lên hàng đầu, không ngừng cải tiến dịch vụ 
            để đảm bảo sự hài lòng và mang lại trải nghiệm tuyệt vời nhất.
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>3. Không gian thư giãn:</strong> Ela Café tạo ra không gian ấm cúng, thoải mái và dễ chịu, 
            nơi khách hàng có thể thư giãn, làm việc hay gặp gỡ bạn bè.
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>4. Đam mê và sáng tạo:</strong> Mỗi sản phẩm là kết quả của sự đam mê và sáng tạo không ngừng nghỉ của đội ngũ, 
            với mong muốn mang lại những trải nghiệm mới mẻ và độc đáo.
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>5. Cộng đồng và trách nhiệm:</strong> Ela Café luôn chú trọng đến việc xây dựng mối quan hệ bền chặt với cộng đồng,
            đóng góp tích cực vào sự phát triển xã hội và bảo vệ môi trường.
          </p>
        </div>
        <div className="aboutus__image">
          <img className="aboutus__image" src={images.Story2} alt="Story 2" />
        </div>
      </div>

      <div className="aboutus__section">
        <div className="aboutus__image">
          <img className="aboutus__image" src={images.Story3} alt="Story 3" />
        </div>
        <div className="aboutus__text">
          <h1 className="app__headtext" >Cà phê ngon thôi là chưa đủ</h1>
          <p className="app__header-chapter">
            Cà phê không chỉ là một thức uống, mà là một trải nghiệm đầy cảm hứng, đa dạng và phong phú. Mỗi khách hàng đến với Ela Café đều 
            có những yêu cầu riêng biệt về hương vị, sự tinh tế và trải nghiệm của ly cà phê mình thưởng thức. Chính vì vậy, Ela luôn cam kết 
            mang đến sự sáng tạo và đổi mới trong từng tách cà phê, đồng thời tạo ra không gian thoải mái và thân thiện nhất cho khách hàng.
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>1. Đa dạng hóa nhưng phải chuẩn hóa :</strong> Không ngừng phát triển và cập nhật thực đơn, từ những loại cà phê đặc biệt, trà, 
            cho đến những món thức uống sáng tạo, phù hợp với khẩu vị và nhu cầu của từng khách hàng.
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>2. Sự quan trọng từ góp ý của khách hàng: </strong> Không gì quý giá hơn nhận được sự yêu mến và cả những góp ý chân thành 
            đến từ khách hàng đối với nhà Ela, chính vì vậy, Ela luôn biết ơn sự yêu quý và đóng góp của khách hàng đối với chúng mình.
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>3. Sáng tạo không ngừng:</strong> Luôn tìm tòi và sáng tạo ra những sản phẩm mới, đảm bảo sự độc đáo và khác biệt trong từng thức uống.
          </p>
        </div>
      </div>

      <div className="aboutus__section">
        <div className="aboutus__text">
          <h1 className="app__headtext" >Uống gì khi tới Ela</h1>
          <p className="app__header-chapter">
            Để mang đến nhiều sự trải nghiệm hơn cho khách hàng, nhà Ela luôn chú trọng mang tới thêm nhiều lựa chọn về thức uống để bổ sung vào thực đơn của Ela cafè.
            Nhiều thức uống được cập nhật theo mùa và được chọn lọc và pha chế kĩ càng bởi các barista của nhà Ela.
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>1. Signature Coffee:</strong> Chắc chắn rồi, là một coffee shop, cà phê luôn là thức uống chủ đạo của nhà Ela. Được pha lọc từ những hạt cà phê chất lượng nhất và 
            pha chế bởi những barista có nhiều kinh nghiệm, cà phê là thức uống phải thử nếu bạn lần đầu tới với Ela Cafè.
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>2. Cold Brew:</strong> Nếu là một coffeeholic đây luôn là sự lựa chọn tuyệt vời cho bạn, Cold brew tại nhà Ela là sự kết hợp hoàn hảo giữa hương vị
             tự nhiên và sự tinh tế trong từng giọt cà phê. Với phương pháp ủ lạnh kéo dài, từng hạt cà phê được chắt lọc để mang lại vị ngọt dịu nhẹ, hậu vị êm mượt mà
            không hề gắt. 
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>3. Special Coffee:</strong> Special Coffee tại nhà Ela là sự hòa quyện đầy tinh tế của cà phê nguyên chất với những nguyên liệu độc đáo, tạo nên một
             hương vị đặc biệt không thể tìm thấy ở đâu khác. Từ vị béo ngậy của sữa tươi, sự ngọt ngào từ caramel, cho đến chút cay nồng của quế hay sự tươi mát của cam, 
             mỗi ly Special Coffee là một câu chuyện hương vị, mang đến trải nghiệm mới lạ và đầy bất ngờ. 
          </p>
          <p className="app__header-chapter" style={{ marginLeft: '30px' }}>
            <strong>4. Break: </strong> 
            Nếu bạn muốn tìm đến sự mới lạ hay đơn giản là muốn thử những thức uống mới thì cũng đừng lo, nhà Ela có rất nhiều lựa chọn cho bạn. Từ những ly trà trái câycây thanh mát, 
            những ly matcha và hojicha đậm đà, đến những món nước sáng tạo đầy màu sắc, mỗi thức uống đều được chăm chút tỉ mỉ để mang đến trải nghiệm vị giác tuyệt vời.
          </p>
        </div>
        <div className="aboutus__image">
          <img className="aboutus__image" src={images.Story2} alt="Story 2" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
