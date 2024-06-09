import { Character } from "@domain/characters";
import { Comics } from "@domain/comics";
import { useCharacters } from "@hooks/characters/useCharacters";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useCharacterController = () => {
  const router = useRouter();
  const { id } = router.query;

  const character_id = String(id);

  const [loading, setLoading] = useState(false);
  const { getCharacter, getComics } = useCharacters();
  const [character, setCharacter] = useState<Character | null>(null);
  const [comics, setComics] = useState<Array<Comics> | null>(null);

  const fetchCharacter = async () => {
    if (loading) return;

    const { data } = await getCharacter(character_id);
    const { data: comics } = await getComics(character_id);

    if (!data || !comics) return;

    setLoading(false);

    setCharacter(data);
    setComics(comics);
  };

  useEffect(() => {
    if (id) {
      fetchCharacter();
    }
  }, [id]);

  return {
    character,
    comics,
    loading,
  };
};
