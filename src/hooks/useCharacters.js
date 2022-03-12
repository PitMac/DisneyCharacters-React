import { useState, useEffect } from "react";
import { getCharacters } from "../api/DisneyApi";
import "aos/dist/aos.css";
import AOS from "aos";

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let lastPage = localStorage.getItem("page");
  const [page, setPage] = useState(lastPage ? lastPage : 1);
  const getData = async () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsLoading(true);
    const data = await getCharacters(page);
    setIsLoading(false);
    setCharacters(data);
  };

  useEffect(() => {
    AOS.init();
    getData();
  }, []);

  useEffect(() => {
    getData();
    localStorage.setItem("page", page);
  }, [page]);

  return {
    characters,
    page,
    setPage,
    isLoading,
  };
};
