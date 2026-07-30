import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function ReelIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="11.5" stroke="#E8B34D" strokeWidth="1.5" />
      <circle cx="13" cy="13" r="3" fill="#E8B34D" />
      <circle cx="13" cy="5.5" r="1.6" fill="#E8B34D" />
      <circle cx="19.5" cy="10" r="1.6" fill="#E8B34D" />
      <circle cx="17" cy="18.5" r="1.6" fill="#E8B34D" />
      <circle cx="8" cy="18" r="1.6" fill="#E8B34D" />
      <circle cx="6" cy="10" r="1.6" fill="#E8B34D" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="logo">
          <ReelIcon />
          <span className="logo-text">
            PHÒNG CHIẾU <em>08</em>
          </span>
        </NavLink>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Giới thiệu
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Liên hệ
          </NavLink>
        </nav>
      </div>
    </header>
  );
}