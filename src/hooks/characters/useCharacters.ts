import { useCharactersClient } from "./useCharactersClient";

export interface getCharactersProps {
  filter: Record<string, string | undefined>;
}

export const useCharacters = () => {
  const { getAllCharacters, getCharacterById, loading } = useCharactersClient();

  const getCharacters = async ({ filter }: getCharactersProps) => {
    const data = await getAllCharacters({ filter });

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

  const getCharacter = async (id: string) => {
    const data = await getCharacterById(id);

    const character = data.result?.data.results.map((character) => ({
      id: character.id.toString(),
      name: character.name,
      description: character.description,
      avatar_url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      comics: character.comics.items.map((comic) => ({
        name: comic.name,
        resource_url: comic.resourceURI,
      })),
    }));

    return character;
  };

  return { loading, getCharacters, getCharacter };
};
