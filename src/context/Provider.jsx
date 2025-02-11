import { createContext, useState } from "react";
export const UserContext = createContext();

export default function Provider({ children }) {
  const [newReleases, setNewReleases] = useState([]);
  const [choosedMovie, setChoosedMovie] = useState({});
  const [more, setMore] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [API_KEY, setAPI_KEY] = useState("");

  return (
    <UserContext.Provider
      value={{
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
