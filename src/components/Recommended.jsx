import { useContext, useEffect, useState } from "react";
import styles from "./moviesList.module.css";
import RecommendedMovie from "./recommendedMovie";
import { UserContext } from "../context/Provider";

export default function Recommended({
  clicked,
  setClicked,
  setChoosedMovie,
  choosedMovie,
}) {
  const { recommended, setRecommended, API_KEY, setAPI_KEY } =
    useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.themoviedb.org/3/movie/top_rated`;
  useEffect(() => {
    async function fetchRecommended() {
      const response = await fetch(`${URL}?api_key=${API_KEY}`);
      const data = await response.json();
      //console.log(data.results);
      setRecommended(data.results);
      setIsLoading(false);
    }
    fetchRecommended();
  }, []);

  return (
    <div className={styles.moviesBar}>
      <h1 className={styles.title}>Recommended</h1>
      <div className={styles.moviesContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          recommended.map((recommendedMovie) => {
            return (
              <RecommendedMovie
                key={recommendedMovie.id}
                recommendedMovie={recommendedMovie}
                clicked={clicked}
                setClicked={setClicked}
                setChoosedMovie={setChoosedMovie}
                choosedMovie={choosedMovie}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
