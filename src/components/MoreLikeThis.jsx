import { useContext, useEffect, useState } from "react";
import MoreMovie from "./MoreMovie";
import styles from "./moviesList.module.css";
import { UserContext } from "../context/Provider";

export default function MoreLikeThis({
  movie,
  setClicked,
  setChoosedMovie,
  choosedMovie,
  clicked,
}) {
  const { more, setMore, API_KEY, setAPI_KEY } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.themoviedb.org/3/movie`;

  useEffect(() => {
    if (movie && movie.id) {
      async function fetchMore() {
        const response = await fetch(
          `${URL}/${movie.id}/similar?api_key=${API_KEY}`
        );
        const data = await response.json();
        //console.log(data.results);
        setMore(data.results);
        setIsLoading(false);
      }
      fetchMore();
    }
  }, [movie]);

  return (
    <div className={styles.moviesContainer}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        more.map((movie) => {
          return (
            <MoreMovie
              key={movie.id}
              movie={movie}
              setClicked={setClicked}
              setChoosedMovie={setChoosedMovie}
              choosedMovie={choosedMovie}
              clicked={clicked}
            />
          );
        })
      )}
    </div>
  );
}
