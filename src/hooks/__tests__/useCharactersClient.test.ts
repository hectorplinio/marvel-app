import { renderHook } from "@testing-library/react";
import { useCharactersClient } from "../characters/useCharactersClient";

describe("useCharactersClient", () => {
  it("fetches all characters", async () => {
    const { result } = renderHook(() => useCharactersClient());

    const data = await result.current.getAllCharacters({
      filter: { limit: "10" },
    });
    expect(data).not.toBeNull();
  });

  it("fetches character by id", async () => {
    const { result } = renderHook(() => useCharactersClient());

    const data = await result.current.getCharacterById("1");
    expect(data).not.toBeNull();
  });

  it("fetches comics by character id", async () => {
    const { result } = renderHook(() => useCharactersClient());

    const data = await result.current.getComicsByCharacterId("1");
    expect(data).not.toBeNull();
  });
});
