import { Card } from "@components/Card";
import { useCharactersController } from "./controller";
import { SearchBar } from "@components/SearchBar";

export const CharactersPage = () => {
  const { characters, loading, onChangeSearch } = useCharactersController();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6 px-4">
      <SearchBar onSearch={onChangeSearch} />
      <p className="mb-4 ml-2 text-sm">{characters?.length} RESULTS</p>
      <div className="flex flex-wrap">
        {characters?.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
