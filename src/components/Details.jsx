import { useEffect, useState } from "react";
import Time from "./Time";
import Genres from "./Genres";
import styles from "./movieDetails.module.css";
import MoreLikeThis from "./MoreLikeThis";
import styless from "./movie.module.css";
import stylesss from "./moviesList.module.css";

export default function Details({
  choosedMovie,
  setClicked,
  setChoosedMovie,
  clicked,
  API_KEY,
  setAPI_KEY,
}) {
  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.themoviedb.org/3/movie`;
  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(
        `${URL}/${choosedMovie.id}?api_key=${API_KEY}`
      );

      const data = await response.json();
      //console.log("details::::", data);
      setDetails(data);
      setGenres(data.genres);
      setIsLoading(false);
    }
    fetchDetails();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.imageContainer}>
        <img
          className={styles.movieCover}
          src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
          alt="Movie Poster"
        />
      </div>

      <div className={styles.movieDetailsInfo}>
        <h1 className={styles.movieDetailsName}>{details.title}</h1>
        <span className={styles.infoDate}>📅{details.release_date} </span>
        <span className={styles.infoTime}>
          ⌛
          <Time time={details.runtime} />
        </span>
      </div>

      <div className={styles.movieDetails}>
        <div className={styles.posterConatiner}>
          <img
            className={styles.movieDetailsPoster}
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt="Movie Poster"
          />
        </div>
        <div className={styles.breif}>
          <ul className={styles.genreList}>
            {genres.map((genre) => {
              return (
                <li className={styles.genre} key={genre.id}>
                  <Genres genre={genre} />
                </li>
              );
            })}
          </ul>
          <p className={styles.rateDetails}>⭐{details.vote_average}</p>
          <p className={styles.overviewDetails}>{details.overview}</p>
        </div>
      </div>

      <p>More Like This</p>
      <div className={styles.moviesBar}>
        <MoreLikeThis
          movie={details}
          setClicked={setClicked}
          setChoosedMovie={setChoosedMovie}
          choosedMovie={choosedMovie}
          clicked={clicked}
        />
      </div>
    </div>
  );
}
