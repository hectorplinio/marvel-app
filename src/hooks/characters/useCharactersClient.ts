import { useHttpClient } from "../useHttpClient";
import { CharacterResponse } from "@utils/httpClient/marvelApiResponses";
import { getCharactersProps } from "./useCharacters";

const createQueryParams = ({ filter }: getCharactersProps) => {
  const queryParams = new URLSearchParams();

  Object.entries(filter).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value);
    }
  });

  return queryParams.toString();
};

export const useCharactersClient = () => {
  const { http, loading } = useHttpClient();

  const getAllCharacters = ({ filter }: getCharactersProps) =>
    http<CharacterResponse>(`characters?${createQueryParams({ filter })}`);

  const getCharacterById = (id: string) =>
    http<CharacterResponse>(`character/${id}/`);

  return { loading, getAllCharacters, getCharacterById };
};
