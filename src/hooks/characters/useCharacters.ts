import { Comics } from "@domain/comics";
import { useCharactersClient } from "./useCharactersClient";
import { Character } from "@domain/characters";

export interface getCharactersProps {
  filter: Record<string, string | undefined>;
}

export const useCharacters = () => {
  const {
    getAllCharacters,
    getCharacterById,
    getComicsByCharacterId,
    loading,
  } = useCharactersClient();

  const getCharacters = async ({
    filter,
  }: getCharactersProps): Promise<{ data: Character[] | null }> => {
    const data = await getAllCharacters({ filter });

    if (!data.result || !data.result.data) {
      return { data: null };
    }

    const characters = data.result?.data.results.map((character) => ({
      id: character.id.toString(),
      name: character.name,
      description: character.description,
      avatar_url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      is_favorited: false,
      comics: character.comics.items.map((comic) => ({
        name: comic.name,
        resource_url: comic.resourceURI,
      })),
    }));

    return { data: characters };
  };

  const getCharacter = async (
    id: string,
  ): Promise<{ data: Character | null }> => {
    const data = await getCharacterById(id);

    if (!data.result || !data.result.data) {
      return { data: null };
    }

    const characterData = data.result.data.results[0];

    const character = {
      id: characterData.id.toString(),
      name: characterData.name,
      description: characterData.description,
      avatar_url: `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`,
      is_favorited: false,
      comics: characterData.comics.items.map((comic) => ({
        name: comic.name,
        resource_url: comic.resourceURI,
      })),
    };

    return { data: character };
  };

  const getComics = async (id: string): Promise<{ data: Comics[] | null }> => {
    const data = await getComicsByCharacterId(id);
    console.log(data);
    if (!data.result || !data.result.data) {
      return { data: null };
    }

    const comics = data.result?.data.results.map((comic) => {
      const onSaleDateObj = comic.dates.find(
        (dateObj) => dateObj.type === "onsaleDate",
      );
      const year = onSaleDateObj
        ? new Date(onSaleDateObj.date).getFullYear()
        : 0;

      return {
        name: comic.title,
        resource_url: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        year: year,
      };
    });

    return { data: comics };
  };

  return { loading, getCharacters, getCharacter, getComics };
};
