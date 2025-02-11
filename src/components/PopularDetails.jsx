import styles from "./popular.module.css";

export default function PopularDetails({ popularMovie }) {
  return (
    <div className={styles.popularMovie}>
      <div className={styles.moviePoster}>
        <img
          className={styles.movieIcon}
          src={`https://image.tmdb.org/t/p/w500${popularMovie.backdrop_path}`}
          alt="Movie Cover"
        />
        <div className={styles.movieDetails}>
          <div className={styles.moviePosterImage}>
            <img
              className={styles.movieImage}
              src={`https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`}
              alt="Movie Poster"
            ></img>
          </div>
          <div className={styles.movieInfo}>
            <h1>{popularMovie.title}</h1>
            <span className={styles.date}>📅{popularMovie.release_date}</span>
            <span className={styles.rate}>⭐{popularMovie.vote_average}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
