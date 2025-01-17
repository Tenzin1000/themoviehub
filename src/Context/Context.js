import React, { useContext, useEffect, useState } from "react";
//Api link
const API_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("mountain");

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const getmovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setMovie(data.Search);
        setError({
          show: false,
          msg: "",
        });
        setTotalResults(data.totalResults);
        setIsLoading(false);
      } else {
        setMovie([]);

        setError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (errors) {
      setMovie([]);
      setError({ show: true, msg: "Something went wrong" });
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getmovies(`${API_url}&s=${query}&page=${currentPage}`);
    }, 500);
    return () => {
      clearTimeout(timerOut);
    };
  }, [query, currentPage]);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        movie,
        error,
        query,
        setQuery,
        totalResults,
        setTotalResults,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
