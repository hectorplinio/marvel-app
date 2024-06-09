import { Card } from "@components/Card";
import { useCharactersController } from "@controllers/useCharactersController";
import { SearchBar } from "@components/SearchBar";
import { Spinner } from "@components/Spinner";

const CharactersPage = () => {
  const { characters, loading, onChangeSearch } = useCharactersController();

  if (loading || !characters) return <Spinner />;

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

export default CharactersPage;
