import React, { useState } from 'react';
import './FindUs.css';

const FindUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    issueType: '',
    problemDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', phone: '', address: '', issueType: '', problemDescription: '' });
  };

  return (
    <div className="feedback-form-container">
      <div className="feedback-form-wrapper">
        <h1 className="feedback-form-title">Feedback Form</h1>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Tên Khách Hàng:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
  
          <label htmlFor="phone">Số Điện Thoại:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
  
          <label htmlFor="address">Địa Chỉ:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
  
          <label htmlFor="issueType">Vấn đề :</label>
          <select
            id="issueType"
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            required
          >
            <option value="">Select an issue</option>
            <option value="Product">Product</option>
            <option value="Service">Service</option>
            <option value="Other">Other</option>
          </select>
  
          <label htmlFor="problemDescription">Nội dung của vấn đề:</label>
          <textarea
            id="problemDescription"
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleChange}
            required
          ></textarea>
  
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  );
  
};

export default FindUs;
