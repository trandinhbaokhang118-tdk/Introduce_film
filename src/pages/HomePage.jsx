import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { MOVIES } from "../data/movies";
import "./HomePage.css";

export default function HomePage() {
  const featured = MOVIES[0];

  return (
    <>
      <section className="hero">
        <div className="hero-label">ĐANG CHIẾU TUẦN NÀY</div>
        <h1 className="hero-title">{featured.title}</h1>
        <p className="hero-sub">{featured.synopsis}</p>
        <Link to={`/movie/${featured.id}`} className="hero-btn">
          Xem lịch chiếu →
        </Link>
      </section>

      <section>
        <div className="list-heading">
          <h2 className="section-title">Lịch chiếu</h2>
          <span className="section-count">{MOVIES.length} phim</span>
        </div>
        <div className="movie-grid">
          {MOVIES.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}