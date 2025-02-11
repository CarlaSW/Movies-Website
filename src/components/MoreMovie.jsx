import { useEffect, useState } from "react";
import styles from "./movie.module.css";
import Details from "./Details";
import { useNavigate } from "react-router-dom";

export default function MoreMovie({
  movie,
  setClicked,
  setChoosedMovie,
  choosedMovie,
  clicked,
}) {
  const navigate = useNavigate();
  function handleClick() {
    // Set the chosen movie and trigger the clicked state
    navigate(`/movie/${movie.id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to "auto" if you don't want smooth scrolling
    });
  }
  useEffect(() => {
    console.log(choosedMovie.title);
  }, [choosedMovie]);

  return (
    <div>
      {
        <div className={styles.movieContainer} onClick={handleClick}>
          <div>
            <img
              className={styles.movieImage}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div className={styles.movieInfo}>
            <p className={styles.info}>⭐ {movie.vote_average}</p>
            <h3 className={styles.info}>{movie.title}</h3>
            <h5 className={styles.info}>{movie.release_date}</h5>
          </div>
          <div className={styles.overview}>{movie.overview}</div>
        </div>
      }
    </div>
  );
}
