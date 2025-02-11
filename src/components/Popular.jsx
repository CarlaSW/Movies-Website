import { useContext, useEffect, useState } from "react";
import styles from "./popular.module.css";
import PopularDetails from "./PopularDetails";
import { UserContext } from "../context/Provider";

export default function Popular() {
  const { API_KEY, setAPI_KEY } = useContext(UserContext);
  const [popularMovie, setPopularMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.themoviedb.org/3/discover/movie`;
  useEffect(() => {
    async function fetchPopular() {
      const response = await fetch(`${URL}?api_key=${API_KEY}`);
      const data = await response.json();
      //console.log(data.results);
      setPopularMovie(data.results[0]);
      setIsLoading(false);
    }
    fetchPopular();
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PopularDetails popularMovie={popularMovie} />
      )}
    </div>
  );
}
