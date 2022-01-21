import { renderHook } from "@testing-library/react-hooks";
import { useLocation, useWeather, useFavorites } from "../../src/hooks";

describe("useLocation Hook", () => {
  it("should be completed the hook", async () => {
    const { result } = renderHook(() => useLocation());
    expect(result.current).toBeTruthy();
  });
});
describe("useWeather Hook", () => {
  it("should be completed the hook", async () => {
    const { result } = renderHook(() => useWeather());
    expect(result.current).toBeTruthy();
  });
});
describe("useFavorite Hook", () => {
  it("should be completed the hook", async () => {
    const { result } = renderHook(() => useFavorites());
    expect(result.current).toBeTruthy();
  });
});
