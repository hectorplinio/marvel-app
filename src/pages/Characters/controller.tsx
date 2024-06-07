/* eslint-disable react-hooks/exhaustive-deps */
import { Character } from "@domain/characters";
import { useCharacters } from "@hooks/characters/useCharacters";
import { useEffect, useState } from "react";

export interface FilterGetCharacters {
  name?: string;
  limit: string;
}

export const useCharactersController = () => {
  const [loading, setLoading] = useState(false);
  const { getCharacters } = useCharacters();
  const [characters, setCharacters] = useState<Array<Character> | null>(null);

  const [filter, setFilter] = useState<FilterGetCharacters>({
    name: undefined,
    limit: "50",
  });

  const fetchCharacters = async () => {
    if (loading) return;

    const { data } = await getCharacters({
      filter: {
        name: filter.name ? filter.name : undefined,
        limit: filter.limit,
      },
    });

    if (!data) return;

    setLoading(false);
    setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters();
  }, [filter.name]);

  const onChangeSearch = (value: string) => {
    setFilter({ ...filter, name: value });
  };

  return {
    characters,
    loading,
    onChangeSearch,
  };
};
