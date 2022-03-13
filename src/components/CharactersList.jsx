import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { CharactersItem } from "./CharactersItem";
import styles from "../styles/Components.module.css";
import { NavigationButtons } from "./NavigationButtons";

export const CharactersList = ({ params }) => {
  const { id } = params;
  const { characters, page, setPage, isLoading } = useCharacters(id);
  return (
    <>
      <div className={styles.listContainer}>
        {!isLoading ? (
          characters.map((character) => (
            <CharactersItem key={character.url} character={character} />
          ))
        ) : (
          <p className={styles.loadingWord}>Loading...</p>
        )}
      </div>
      {!isLoading && <NavigationButtons page={page} setPage={setPage} />}
    </>
  );
};
