import React from "react";
import { CharactersList } from "../components/CharactersList";
import { Footer } from "../components/Footer";
import { NavigationButtons } from "../components/NavigationButtons";
import { useCharacters } from "../hooks/useCharacters";

export const HomePage = ({ params }) => {
  const { id } = params;
  const { characters, page, setPage, isLoading } = useCharacters(id);
  return (
    <>
      <div className=" m-auto grid grid-cols-2 p-5 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:w-10/12 xl:grid-cols-5">
        <CharactersList
          characters={characters}
          page={page}
          setPage={setPage}
          isLoading={isLoading}
        />
      </div>
      {!isLoading && <NavigationButtons page={page} setPage={setPage} />}
      <Footer />
    </>
  );
};
