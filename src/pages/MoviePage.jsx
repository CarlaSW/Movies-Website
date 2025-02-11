import { useContext, useEffect, useState } from "react";
import Time from "../components/Time";
import Genres from "../components/Genres";
import styles from "../components/movieDetails.module.css";
import MoreLikeThis from "../components/MoreLikeThis";
import styless from "../components/movie.module.css";
import stylesss from "../components/moviesList.module.css";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/Provider";

export default function MoviePage({ setClicked, clicked }) {
  const { id } = useParams();
  const {
    newReleases,
    setNewReleases,
    choosedMovie,
    setChoosedMovie,
    more,
    setMore,
    recommended,
    setRecommended,
    API_KEY,
    setAPI_KEY,
  } = useContext(UserContext);
  const all = [...new Set([...newReleases, ...more, ...recommended])];

  all.map((movie) => {
    if (movie.id === id) {
      return setChoosedMovie(movie);
    }
  });
  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.themoviedb.org/3/movie`;
  // Fetch API key from the text file
  useEffect(() => {
    fetch("/APIKEY.txt")
      .then((response) => response.text())
      .then((key) => {
        setAPI_KEY(key.trim());
      })
      .catch((error) => console.error("Error fetching API key:", error));
  }, []);
  //
  useEffect(() => {
    if (!API_KEY) return; // Ensure API key is set before making the request
    async function fetchDetails() {
      //console.log(id);
      const response = await fetch(`${URL}/${id}?api_key=${API_KEY}`);

      const data = await response.json();
      //console.log("details::::", data);
      setDetails(data);
      setGenres(data.genres);
      setIsLoading(false);
    }
    fetchDetails();
  }, [id, all, setChoosedMovie, API_KEY]);

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
