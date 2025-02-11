import { useContext, useEffect, useState } from "react";
import Genres from "./Genres";
import styles from "./searchPage.module.css";
import { UserContext } from "../context/Provider";

export default function SearchedMovie({
  movie,
  clicked,
  setClicked,
  setChoosedMovie,
}) {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { API_KEY, setAPI_KEY } = useContext(UserContext);
  const URL = `https://api.themoviedb.org/3/movie`;
  useEffect(() => {
    async function fetchGenres() {
      const response = await fetch(`${URL}/${movie.id}?api_key=${API_KEY}`);
      const data = await response.json();
      //console.log(data);
      setGenres(data.genres);
      setIsLoading(false);
    }
    fetchGenres();
  }, []);
  function handleClick() {
    //console.log(movie.title);
    setChoosedMovie(movie);
    setClicked(true);
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to "auto" if you don't want smooth scrolling
    });
  }
  return (
    <div className={styles.movieContainer} onClick={handleClick}>
      <div className={styles.moviePoster}>
        <img
          className={styles.movieImage}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie Poster"
        ></img>
      </div>
      <div className={styles.movieInfo}>
        <h1 className={styles.info}>{movie.title}</h1>
        <h4 className={styles.info}>📅 {movie.release_date}</h4>
        <ul>
          {genres.map((genre) => {
            return (
              <li key={genre.id}>
                <Genres genre={genre} />
              </li>
            );
          })}
        </ul>
        <p className={styles.overview}>{movie.overview}</p>
      </div>
    </div>
  );
}
