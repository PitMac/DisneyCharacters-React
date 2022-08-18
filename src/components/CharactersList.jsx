import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { CharactersItem } from "./CharactersItem";
import { Loading } from "./Loading";
import { NavigationButtons } from "./NavigationButtons";

export const CharactersList = ({ characters, page, setPage, isLoading }) => {
  return (
    <>
      {!isLoading ? (
        characters.map((character) => (
          <CharactersItem key={character.url} character={character} />
        ))
      ) : (
        <p className=" h-screen pt-5 text-2xl font-bold text-white flex justify-center ">
          <Loading />
        </p>
      )}
    </>
  );
};
