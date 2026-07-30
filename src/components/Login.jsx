import React, { useState } from 'react';
import './Login.css'; // Import file CSS vừa tạo

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đăng nhập với tài khoản: ${username}`);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Đăng Nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tài khoản</label>
          <input 
            type="text" 
            placeholder="Nhập tên đăng nhập..."
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input 
            type="password" 
            placeholder="Nhập mật khẩu..."
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="login-btn">Đăng nhập</button>
      </form>
    </div>
  );
}

export default LoginPage;