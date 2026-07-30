
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }
    if (form.password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="signup-wrap">
        <div className="hero-label">ĐĂNG KÝ THÀNH CÔNG</div>
        <h1 className="signup-title">Chào mừng, {form.name}!</h1>
        <p className="signup-intro">Tài khoản của bạn đã được tạo. Giờ bạn có thể theo dõi lịch chiếu mới nhất.</p>
        <Link to="/" className="signup-submit" style={{ display: "inline-block", textDecoration: "none", textAlign: "center" }}>
          Về trang chủ
        </Link>
      </section>
    );
  }

  return (
    <section className="signup-wrap">
      <div className="hero-label">ĐĂNG KÝ</div>
      <h1 className="signup-title">Tạo tài khoản Phòng Chiếu 08</h1>
      <p className="signup-intro">Đăng ký để lưu phim yêu thích và nhận lịch chiếu mới.</p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          className="signup-input"
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="signup-input"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="signup-input"
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          className="signup-input"
          type="password"
          name="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        {error && <p className="signup-error">{error}</p>}

        <button type="submit" className="signup-submit">
          Đăng ký
        </button>
      </form>
    </section>
  );
}