import React, { useState } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>📞 Liên Hệ Với Chúng Tôi</h2>
          <p>Bạn có góp ý hay thắc mắc về ứng dụng xem phim? Hãy gửi tin nhắn cho team ngay nhé!</p>
          
          <div className="info-item">
            <span>📍 Địa chỉ:</span> Thành phố Hồ Chí Minh, Việt Nam
          </div>
          <div className="info-item">
            <span>✉️ Email:</span> support@movieapp.com
          </div>
          <div className="info-item">
            <span>🌐 Hotline:</span> 1900 1234 56
          </div>
        </div>

        <div className="contact-form-card">
          {submitted ? (
            <div className="success-message">
              🎉 Cảm ơn bạn đã gửi phản hồi! Team sẽ phản hồi trong thời gian sớm nhất.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3>Gửi tin nhắn</h3>
              <div className="form-group">
                <label>Họ và tên</label>
                <input type="text" placeholder="Nhập tên của bạn" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" required />
              </div>
              <div className="form-group">
                <label>Nội dung</label>
                <textarea rows="4" placeholder="Nhập lời nhắn..." required></textarea>
              </div>
              <button type="submit" className="btn-send">Gửi liên hệ</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}