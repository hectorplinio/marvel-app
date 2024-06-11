import { renderHook } from "@testing-library/react";
import { useHttpClient } from "../useHttpClient";

describe("useHttpClient", () => {
  it("makes an HTTP request", async () => {
    const { result } = renderHook(() => useHttpClient());

    const data = await result.current.http("/api/test");
    expect(data).not.toBeNull();
  });
});
