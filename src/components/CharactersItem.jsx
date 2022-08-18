import "aos/dist/aos.css";
import { Link } from "wouter";

export const CharactersItem = ({ character }) => {
  return (
    <Link
      to={`character/${character._id}`}
      data-aos="fade-up"
      className="max-w-sm text-slate-400 bg-slate-900 rounded-lg border shadow-md border-gray-700 hover:bg-gray-700 hover:text-white"
    >
      {character.imageUrl ? (
        <img
          loading="lazy"
          className="rounded-t-lg object-cover h-80 w-full"
          src={character.imageUrl}
          alt={character.name}
        />
      ) : (
        <img
          className="rounded-t-lg"
          src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
          alt={character.name}
        />
      )}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">
          {character.name}
        </h5>
      </div>
    </Link>
    // <Link
    //   to={`character/${character._id}`}
    //   data-aos="fade-up"
    //   className={styles.characterItem}
    // >
    //   <section>
    //     {character.imageUrl ? (
    //       <img
    //         loading="lazy"
    //         className={styles.cardImg}
    //         src={character.imageUrl}
    //         alt={character.name}
    //       />
    //     ) : (
    //       <img
    //         className={styles.cardImg}
    //         src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
    //         alt={character.name}
    //       />
    //     )}
    //   </section>
    //   <section className={styles.characterName}>
    //     <h3>{character.name}</h3>
    //   </section>
    // </Link>
  );
};
