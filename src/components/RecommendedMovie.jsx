import { useNavigate } from "react-router-dom";
import styles from "./movie.module.css";

export default function RecommendedMovie({
  recommendedMovie,
  clicked,
  setClicked,
  setChoosedMovie,
  choosedMovie,
}) {
  const navigate = useNavigate();
  function handleClick() {
    //console.log(recommendedMovie.title);
    //setChoosedMovie(recommendedMovie);
    //console.log(recommendedMovie.title);
    //console.log(choosedMovie.title);
    //setClicked(true);
    // Scroll to the top of the page
    navigate(`/movie/${recommendedMovie.id}`);
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
          src={`https://image.tmdb.org/t/p/w500${recommendedMovie.poster_path}`}
          alt="Movie Poster"
        />
      </div>
      <div className={styles.movieInfo}>
        <p className={styles.info}>⭐ {recommendedMovie.vote_average}</p>
        <h3 className={styles.info}>{recommendedMovie.title}</h3>
        <h5 className={styles.info}>{recommendedMovie.release_date}</h5>
      </div>
      <div className={styles.overview}>{recommendedMovie.overview}</div>
    </div>
  );
}
