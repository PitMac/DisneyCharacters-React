import styles from "../styles/Components.module.css";

export const CharacterDetails = ({ character }) => {
  return (
    <section className={styles.detailsSection}>
      <h1>{character.name}</h1>
      {character.tvShows.map((e) => (
        <p key={e}>{e}</p>
      ))}
      {character.films.map((e) => (
        <p key={e}>{e}</p>
      ))}
      <p>{character._id}</p>
    </section>
  );
};
