import { useContext, useEffect, useState } from "react";
import NewMovie from "./NewMovie";
import styles from "./moviesList.module.css";
import { UserContext } from "../context/Provider";

export default function NewReleases({ clicked, setClicked, setChoosedMovie }) {
  // const [newReleases, setNewReleases] = useState([]);
  const { newReleases, setNewReleases, API_KEY, setAPI_KEY } =
    useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.themoviedb.org/3/movie/upcoming`;
  useEffect(() => {
    async function fetchNewReleases() {
      const response = await fetch(`${URL}?api_key=${API_KEY}`);
      const data = await response.json();
      //console.log(data.results);
      setNewReleases(data.results);
      setIsLoading(false);
    }
    fetchNewReleases();
  }, []);
  return (
    <div className={styles.moviesBar}>
      <h1 className={styles.title}>New Releases</h1>
      <div className={styles.moviesContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          newReleases.map((newMovie) => {
            return (
              <NewMovie
                key={newMovie.id}
                newMovie={newMovie}
                clicked={clicked}
                setClicked={setClicked}
                setChoosedMovie={setChoosedMovie}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
