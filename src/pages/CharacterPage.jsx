import { Link, useParams } from "react-router-dom";
import { CharacterDetails } from "../components/CharacterDetails";
import { useCharacter } from "../hooks/useCharacter";
import styles from "../styles/Components.module.css";

export default function CharacterPage() {
  const { id } = useParams();
  const { character } = useCharacter(id);

  return (
    <>
      {character ? (
        <>
          <section className={styles.characterContainer}>
            <img
              className={styles.characterImg}
              data-aos="fade-right"
              src={character.imageUrl}
              alt={character.name}
            />
            <CharacterDetails character={character} />
          </section>
          <section className={styles.buttonSection}>
            <Link className={styles.backButton} to="/">
              Back
            </Link>
          </section>
        </>
      ) : (
        <p className={styles.loadingWord}>Loading...</p>
      )}
    </>
  );
}
