import { Card } from "@components/Card";
import { useCharactersController } from "@controllers/useCharactersController";
import { SearchBar } from "@components/SearchBar";
import { Spinner } from "@components/Spinner";

const CharactersPage = () => {
  const { characters, loading, searchTerm, onChangeSearch } =
    useCharactersController();

  if (loading || !characters) return <Spinner />;

  return (
    <div className="container mx-auto p-6 px-4 pb-16">
      <SearchBar
        onSearch={onChangeSearch}
        isLoading={loading}
        value={searchTerm}
      />
      <p className="mb-4 ml-2 text-sm">{characters?.length} RESULTS</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {characters?.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
