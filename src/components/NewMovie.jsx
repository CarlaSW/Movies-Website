import { useNavigate } from "react-router-dom";
import styles from "./movie.module.css";

export default function NewMovie({
  newMovie,
  clicked,
  setClicked,
  setChoosedMovie,
}) {
  const navigate = useNavigate();
  function handleClick() {
    console.log(newMovie);
    //console.log(newMovie.title);
    //setChoosedMovie(newMovie);
    //setClicked(true);
    // Scroll to the top of the page
    navigate(`/movie/${newMovie.id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to "auto" if you don't want smooth scrolling
    });
  }
  return (
    <div className={styles.movieContainer} onClick={handleClick}>
      <div>
        <img
          className={styles.movieImage}
          src={`https://image.tmdb.org/t/p/w500${newMovie.poster_path}`}
          alt="Movie Poster"
        />
      </div>
      <div className={styles.movieInfo}>
        <p className={styles.info}>⭐ {newMovie.vote_average}</p>
        <h3 className={styles.info}>{newMovie.title}</h3>
        <h5 className={styles.info}>{newMovie.release_date}</h5>
      </div>
      <div className={styles.overview}>{newMovie.overview}</div>
    </div>
  );
}
