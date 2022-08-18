export const CharacterDetails = ({ character }) => {
  return (
    <div className="flex flex-col mt-20 items-center bg-slate-900 border-gray-700 rounded-lg border shadow-md md:flex-row md:min-w-fit md:mt-44">
      <img
        className="object-cover w-full h-96 rounded-t-lg md:h-96 md:w-auto md:rounded-none md:rounded-l-lg"
        data-aos="fade-right"
        src={character.imageUrl}
        alt={character.name}
      />
      <div className="flex flex-col justify-between text-center p-4 leading-normal md:w-96">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {character.name}
        </h5>
        {character.tvShows.map((e) => (
          <p
            key={e}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            {e}
          </p>
        ))}
        {character.films.map((e) => (
          <p
            key={e}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            {e}
          </p>
        ))}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Id: {character._id}
        </p>
      </div>
    </div>
  );
};
