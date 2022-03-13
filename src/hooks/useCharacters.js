import { useState, useEffect, useContext } from "react";
import { getCharacters } from "../api/DisneyApi";
import "aos/dist/aos.css";
import AOS from "aos";

export const useCharacters = (id) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(id ? id : 1);
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
  }, [page, setCharacters]);

  return {
    characters,
    page,
    setPage,
    isLoading,
  };
};
