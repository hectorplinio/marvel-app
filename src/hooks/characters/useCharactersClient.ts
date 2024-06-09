import { useHttpClient } from "../useHttpClient";
import {
  CharacterResponse,
  ComicResponse,
} from "@utils/httpClient/marvelApiResponses";
import { getCharactersProps } from "./useCharacters";

export type MarvelApiResponse<T> = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
  };
};

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
    http<MarvelApiResponse<CharacterResponse>>(
      `characters?${createQueryParams({ filter })}&`,
    );

  const getCharacterById = (id: string) =>
    http<MarvelApiResponse<CharacterResponse>>(`characters/${id}?`);

  const getComicsByCharacterId = (id: string) =>
    http<MarvelApiResponse<ComicResponse>>(`characters/${id}/comics?`);

  return {
    loading,
    getAllCharacters,
    getCharacterById,
    getComicsByCharacterId,
  };
};
