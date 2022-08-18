import { CharacterDetails } from "../components/CharacterDetails";
import { Loading } from "../components/Loading";
import { useCharacter } from "../hooks/useCharacter";

export default function CharacterPage({ params }) {
  const { id } = params;
  const { character } = useCharacter(id);

  return (
    <div className="flex items-center justify-center">
      {character ? <CharacterDetails character={character} /> : <Loading />}
    </div>
  );
}
