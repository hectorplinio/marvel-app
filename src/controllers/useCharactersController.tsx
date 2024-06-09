import { useFavorites } from "@contexts/FavoritesContext";
import { Character } from "@domain/characters";
import { useCharacters } from "@hooks/characters/useCharacters";
import { useEffect, useState } from "react";

export interface FilterGetCharacters {
  nameStartsWith?: string;
  limit: string;
}

export const useCharactersController = () => {
  const [loading, setLoading] = useState(false);
  const { getCharacters } = useCharacters();
  const [characters, setCharacters] = useState<Array<Character> | null>(null);
  const { favorites, showFavorites } = useFavorites();

  const [filter, setFilter] = useState<FilterGetCharacters>({
    nameStartsWith: undefined,
    limit: "50",
  });

  const fetchCharacters = async () => {
    if (loading) return;

    const { data } = await getCharacters({
      filter: {
        nameStartsWith: filter.nameStartsWith
          ? filter.nameStartsWith
          : undefined,
        limit: filter.limit,
      },
    });

    if (!data) return;

    setLoading(false);

    showFavorites
      ? setCharacters(
          data.filter((character) => favorites.includes(character.id)),
        )
      : setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters();
  }, [filter.nameStartsWith, favorites, showFavorites]);

  const onChangeSearch = (value: string) => {
    setFilter({ ...filter, nameStartsWith: value });
  };

  return {
    characters,
    loading,
    onChangeSearch,
  };
};
