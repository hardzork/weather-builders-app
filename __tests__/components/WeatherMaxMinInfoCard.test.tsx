import { render } from "@testing-library/react-native";
import { WeatherMaxMinInfoCard } from "../../src/components";
describe("WeatherMaxMinInfoCard", () => {
  beforeEach(() => {});
  it("should be render the component", () => {
    const { container } = render(<WeatherMaxMinInfoCard />);
    expect(container).toBeTruthy();
  });
});
