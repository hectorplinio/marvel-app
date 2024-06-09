import { useCharacterController } from "./controller";
import { useFavorites } from "@contexts/FavoritesContext";

const CharacterPage = () => {
  const { character, comics, loading } = useCharacterController();
  const { favorites, toggleFavorite } = useFavorites();

  if (loading || !character || !comics) return <p>Loading...</p>;
  const isFavorited = favorites.includes(character?.id);

  return (
    <div className="">
      <div className="flex bg-black text-white items-center justify-center">
        <div className="flex items-center w-full max-w-5xl">
          <img
            src={character.avatar_url}
            alt={character.name}
            className="w-64 h-64 object-cover "
          />
          <div className="ml-12 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold">{character.name}</h1>
                <p className="mt-4 text-lg">{character.description}</p>
              </div>
              <button
                className="focus:outline-none"
                onClick={() => toggleFavorite(character.id)}
              >
                <img
                  src={
                    isFavorited
                      ? "/selected_heart.png"
                      : "/unselected_heart.png"
                  }
                  alt="Favorite"
                  width={90}
                  height={90}
                  className="ml-4 pt-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 px-6">
        <div className="flex justify-center">
          <div className="flex flex-col space-y-4 pb-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">COMICS</h2>
            <div className="flex space-x-4 overflow-x-auto custom-scrollbar">
              {comics.map((comic) => (
                <div key={comic.resource_url} className="w-40 flex-shrink-0">
                  <img
                    src={comic.resource_url}
                    alt={comic.name}
                    className="comic-image"
                  />
                  <p className="mt-2 text-sm text-center">{comic.name}</p>
                  <p className="text-xs text-center text-gray-500">
                    {comic.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
