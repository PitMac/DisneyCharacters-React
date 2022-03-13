import styles from "../styles/Components.module.css";
import "aos/dist/aos.css";
import { Link } from "wouter";

export const CharactersItem = ({ character }) => {
  return (
    <Link
      to={`character/${character._id}`}
      data-aos="fade-up"
      className={styles.characterItem}
    >
      <section>
        {character.imageUrl ? (
          <img
            loading="lazy"
            className={styles.cardImg}
            src={character.imageUrl}
            alt={character.name}
          />
        ) : (
          <img
            className={styles.cardImg}
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt={character.name}
          />
        )}
      </section>
      <section className={styles.characterName}>
        <h3>{character.name}</h3>
      </section>
    </Link>
  );
};
