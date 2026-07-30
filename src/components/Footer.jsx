import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            PHÒNG CHIẾU <em>08</em>
          </div>
          <p className="footer-text">
            Rạp chiếu giả lập dựng cho Bài Thực Hành 08 — minh họa React Router, cấu trúc
            components/pages và quy trình làm việc nhóm với Git.
          </p>
        </div>
        <div>
          <div className="footer-heading">Sơ đồ trang</div>
          <ul className="footer-list">
            <li>Trang chủ — feature/home-page</li>
            <li>Chi tiết phim — feature/movie-detail</li>
            <li>Giới thiệu — feature/about-page</li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Nhánh Git</div>
          <ul className="footer-list">
            <li>main → bản phát hành</li>
            <li>develop → tích hợp tính năng</li>
            <li>feature/* → phát triển riêng lẻ</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 · Demo cho Bài Thực Hành 08 — không dùng cho mục đích thương mại
      </div>
    </footer>
  );
}