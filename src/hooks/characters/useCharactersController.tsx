import { useFavorites } from "@contexts/FavoritesContext";
import { Character } from "@domain/characters";
import { useCharacters } from "@hooks/characters/useCharacters";
import { useEffect, useState } from "react";

export interface FilterGetCharacters {
  nameStartsWith: string;
  limit: string;
}

export const useCharactersController = () => {
  const [loading, setLoading] = useState(false);
  const { getCharacters, getCharacter } = useCharacters();
  const [characters, setCharacters] = useState<Array<Character> | null>(null);
  const { favorites, showFavorites } = useFavorites();
  const [filter, setFilter] = useState<FilterGetCharacters>({
    nameStartsWith: "",
    limit: "50",
  });

  const fetchCharacters = async () => {
    if (loading) return;

    setLoading(true);

    const { data } = await getCharacters({
      filter: {
        nameStartsWith:
          filter.nameStartsWith === "" ? undefined : filter.nameStartsWith,
        limit: filter.limit,
      },
    });

    if (!data) {
      setLoading(false);
      return;
    }

    if (showFavorites) {
      await fetchFavoriteCharacters(data);
    } else {
      setCharacters(data);
    }

    setLoading(false);
  };

  const fetchFavoriteCharacters = async (data: Character[]) => {
    const favoriteCharacters = data.filter((character) =>
      favorites.includes(character.id),
    );

    const missingFavorites = favorites.filter(
      (favoriteId) => !data.some((character) => character.id === favoriteId),
    );

    const missingCharactersPromises = missingFavorites.map(
      async (characterId) => {
        const response = await getCharacter(characterId);
        if (!response || !response.data) {
          return null;
        }
        return response.data;
      },
    );

    const missingCharacters = (
      await Promise.all(missingCharactersPromises)
    ).filter((character): character is Character => character !== null);

    const combinedCharacters = [...favoriteCharacters, ...missingCharacters];

    const filteredFavorites = combinedCharacters.filter((character) =>
      character.name
        .toLowerCase()
        .includes(filter.nameStartsWith?.toLowerCase() || ""),
    );

    setCharacters(filteredFavorites);
  };

  useEffect(() => {
    fetchCharacters();
  }, [filter.nameStartsWith, showFavorites]);

  useEffect(() => {
    if (showFavorites) {
      fetchCharacters();
    }
  }, [favorites]);

  const onChangeSearch = (value: string) => {
    setFilter({ ...filter, nameStartsWith: value });
  };

  return {
    characters,
    loading,
    searchTerm: filter.nameStartsWith,
    showFavorites,
    onChangeSearch,
  };
};
