import Popular from "../components/Popular";
import "../app.css";
import Header from "../components/Header";
import NewReleases from "../components/NewReleases";
import Recommended from "../components/Recommended";
import { useContext, useEffect, useState } from "react";
import Search from "../components/Search";
import Details from "../components/Details";
import MoviePage from "./MoviePage";
import { UserContext } from "../context/Provider";

export default function Homepage() {
  const [query, setQuery] = useState("");
  const [clicked, setClicked] = useState(false);
  const { choosedMovie, setChoosedMovie } = useContext(UserContext);

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} setClicked={setClicked} />

      {query ? (
        <Search
          query={query}
          clicked={clicked}
          setClicked={setClicked}
          setChoosedMovie={setChoosedMovie}
        />
      ) : (
        <>
          <Popular />
          <NewReleases
            clicked={clicked}
            setClicked={setClicked}
            setChoosedMovie={setChoosedMovie}
          />
          <Recommended
            clicked={clicked}
            setClicked={setClicked}
            setChoosedMovie={setChoosedMovie}
            choosedMovie={choosedMovie}
          />
        </>
      )}
    </div>
  );
}
