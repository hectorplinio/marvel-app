import { Card } from "@components/Card";
import { useCharactersController } from "./controller";

export const CharactersPage = () => {
  const { characters, loading } = useCharactersController();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Marvel Characters</h1>
      <div className="flex flex-wrap">
        {characters?.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            avatar_url={character.avatar_url}
            is_favorited={character.is_favorited}
            onFavoriteToggle={() => console.log(character.id)}
          />
        ))}
      </div>
    </div>
  );
};
