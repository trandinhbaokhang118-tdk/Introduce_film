import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie, index }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-poster" style={{ background: movie.gradient }}>
        <span className="movie-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="movie-rating">★ {movie.rating}</span>
      </div>
      <div className="movie-body">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          {movie.genre} · {movie.year} · {movie.duration}
        </div>
        <p className="movie-synopsis">{movie.synopsis}</p>
      </div>
    </Link>
  );
}