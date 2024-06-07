import { useState } from "react";

import { marvelClient } from "@utils/httpClient";

export const useHttpClient = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const http = async <T>(url: string, requestInit?: RequestInit) => {
    setLoading(true);
    const { result, error, errorText, status } = await marvelClient<T>(url, {
      ...requestInit,
      headers: { ...requestInit?.headers },
    });
    setLoading(false);
    return { result, error, errorText, status };
  };

  const createQueryParams = (params: Record<string, string>) =>
    new URLSearchParams(params).toString();

  return { loading, http, createQueryParams };
};
