import React from "react";
import { TEAM } from "../data/movies";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <section className="about-wrap">
      <div className="hero-label">ABout - TestWebHook</div>
      <h1 className="about-title">Ê-kíp đứng sau Phòng Chiếu 08</h1>
      <p className="about-intro">
        Nhóm chúng tôi làm việc theo mô hình Git Flow: mỗi thành viên phát triển một nhánh{" "}
        <code>feature/...</code> riêng, sau đó gộp lại vào nhánh <code>develop</code> thông qua
        Pull Request trước khi phát hành lên <code>main</code>.
      </p>
      <div className="team-grid">
        {TEAM.map((t) => (
          <div key={t.name} className="team-card">
            <div className="team-avatar">{t.name.split(" ").pop()[0]}</div>
            <div className="team-name">{t.name}</div>
            <div className="team-role">{t.role}</div>
            <div className="team-note">{t.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}