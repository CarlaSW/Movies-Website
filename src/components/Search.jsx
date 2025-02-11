import { useContext, useEffect, useState } from "react";
import SearchedMovie from "./SearchedMovie";
import styles from "./searchPage.module.css";
import { UserContext } from "../context/Provider";

export default function Search({
  query,
  clicked,
  setClicked,
  setChoosedMovie,
}) {
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { API_KEY, setAPI_KEY } = useContext(UserContext);
  const URL = `https://api.themoviedb.org/3/search/movie`;
  console.log(query);
  useEffect(() => {
    async function fetchSearch() {
      const response = await fetch(`${URL}?query=${query}&api_key=${API_KEY}`);
      const data = await response.json();
      //console.log(data.results);
      setSearchList(data.results);
      setIsLoading(false);
    }
    fetchSearch();
  }, [query]);
  return (
    <div>
      {searchList.length !== 0 ? (
        searchList.map((movie) => {
          return (
            <SearchedMovie
              key={movie.id}
              movie={movie}
              clicked={clicked}
              setClicked={setClicked}
              setChoosedMovie={setChoosedMovie}
            />
          );
        })
      ) : (
        <h1 className={styles.noMovies}>No Movie Found </h1>
      )}
    </div>
  );
}
