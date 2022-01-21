import { render } from "@testing-library/react-native";
import { WeatherWindInfoCard } from "../../src/components";
describe("WeatherWindInfoCard", () => {
  beforeEach(() => {});
  it("should be render the component", () => {
    const { container } = render(<WeatherWindInfoCard />);
    expect(container).toBeTruthy();
  });
});
