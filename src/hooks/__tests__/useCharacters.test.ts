import { renderHook } from "@testing-library/react";
import { useCharacters } from "../characters/useCharacters";

describe("useCharacters", () => {
  it("fetches characters", async () => {
    const { result } = renderHook(() => useCharacters());

    const data = await result.current.getCharacters({
      filter: { limit: "10" },
    });
    expect(data).not.toBeNull();
  });

  it("fetches character by id", async () => {
    const { result } = renderHook(() => useCharacters());

    const data = await result.current.getCharacter("1");
    expect(data).not.toBeNull();
  });
});
