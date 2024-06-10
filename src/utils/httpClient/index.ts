import crypto from "crypto";

export const API_URL = "https://gateway.marvel.com/v1/public/";

export type ClientResponse<T> = {
  error: boolean;
  errorText?: string;
  result: T | null;
  status: number;
};

const errorResponse = {
  error: true,
  result: null,
};

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;

const generateHash = (ts: string, privateKey: string, publicKey: string) => {
  const rawString = ts + privateKey + publicKey;
  return crypto.createHash("md5").update(rawString).digest("hex");
};

const generateRequestHeaders = async (
  requestInit?: RequestInit,
): Promise<{ requestInit: RequestInit; ts: string; hash: string }> => {
  const ts = new Date().getTime().toString();
  const hash = generateHash(ts, privateKey, publicKey);
  const requestInitWithXRequestId: RequestInit = {
    ...requestInit,
    credentials: "include",
    headers: {
      "Content-type": "application/json",
      ...requestInit?.headers,
    },
  };

  return { requestInit: requestInitWithXRequestId, ts, hash };
};

export const marvelClient = async <T>(
  url: string,
  requestInit?: RequestInit,
): Promise<ClientResponse<T>> => {
  try {
    const { ts, hash, ...rest } = await generateRequestHeaders(requestInit);

    const fullUrl = `${API_URL}${url}ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    const response = await fetch(fullUrl, rest as RequestInit);

    if (!response.ok || response.status === 500) {
      return { ...errorResponse, status: response.status };
    }

    if (response.status == 204) {
      return { result: null, status: 204, error: false };
    }

    const result = await response.json();
    return { result, status: response.status, error: false };
  } catch (e) {
    return { ...errorResponse, status: 500 };
  }
};
