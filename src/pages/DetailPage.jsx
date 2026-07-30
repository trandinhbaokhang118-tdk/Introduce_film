import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { MOVIES } from "../data/movies";
import "./DetailPage.css";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = MOVIES.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <section className="detail-wrap">
        <p>Không tìm thấy phim này.</p>
        <Link to="/">← Quay lại lịch chiếu</Link>
      </section>
    );
  }

  return (
    <section className="detail-wrap">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Quay lại lịch chiếu
      </button>
      <div className="detail-grid">
        <div className="detail-poster" style={{ background: movie.gradient }}>
          <span className="movie-rating">★ {movie.rating}</span>
        </div>
        <div>
          <div className="detail-genre">{movie.genre}</div>
          <h1 className="detail-title">{movie.title}</h1>
          <div className="detail-meta">
            {movie.year} · {movie.duration} · Đạo diễn {movie.director}
          </div>
          <p className="detail-synopsis">{movie.fullSynopsis}</p>
          <div className="cast-label">Diễn viên</div>
          <div className="cast-row">
            {movie.cast.map((c) => (
              <span key={c} className="cast-tag">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}