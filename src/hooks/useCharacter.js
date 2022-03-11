import { useState, useEffect } from "react";
import { getCharacter } from "../api/DisneyApi";
import "aos/dist/aos.css";
import AOS from "aos";

export const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);

  const getData = async () => {
    const data = await getCharacter(id);
    setCharacter(data);
  };

  useEffect(() => {
    AOS.init();
    getData();
  }, []);

  return {
    character,
  };
};
