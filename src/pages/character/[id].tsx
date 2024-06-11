import { Spinner } from "@components/Spinner";
import { useCharacterController } from "@controllers/useCharacterController";
import { useFavorites } from "@contexts/FavoritesContext";

const CharacterPage = () => {
  const { character, comics, loading } = useCharacterController();
  const { favorites, toggleFavorite } = useFavorites();

  if (loading || !character) return <Spinner />;

  const isFavorited = favorites.includes(character?.id);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row bg-black text-white items-center justify-center p-4 md:p-6 relative w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
          <img
            src={character.avatar_url}
            alt={character.name}
            className="w-full max-w-xs md:max-w-none md:w-64 h-auto object-cover"
          />
          <div className="ml-0 md:ml-12 flex-1 mt-4 md:mt-0 text-center md:text-left relative">
            <div className="flex justify-center md:justify-between items-center">
              <h1 className="text-2xl md:text-4xl font-bold flex-1 text-center">
                {character.name}
              </h1>
              <button
                className="focus:outline-none ml-4"
                onClick={() => toggleFavorite(character.id)}
              >
                <img
                  src={
                    isFavorited
                      ? "/selected_heart.png"
                      : "/unselected_heart.png"
                  }
                  alt="Favorite"
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </button>
            </div>
            <p className="mt-2 md:mt-4 text-base md:text-lg">
              {character.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-white transform rotate-45 translate-x-6 translate-y-8 md:w-16 md:h-16 md:translate-x-8 md:translate-y-12"></div>
      </div>
      <div className="mt-8 px-6 pb-16">
        <div className="flex justify-center">
          <div className="flex flex-col space-y-4 overflow-x-auto pb-4 custom-scrollbar max-w-4xl w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              COMICS
            </h2>
            {comics && comics.length > 0 ? (
              <div className="flex space-x-4">
                {comics.map((comic) => (
                  <div
                    key={comic.resource_url + comic.name}
                    className="w-32 md:w-40 flex-shrink-0"
                  >
                    <img
                      src={comic.resource_url}
                      alt={comic.name}
                      className="comic-image border-b-2 border-red-500 w-full h-auto"
                    />
                    <p className="mt-2 text-sm text-center">{comic.name}</p>
                    <p className="text-xs text-center text-gray-500">
                      {comic.year}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">Comics not found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
