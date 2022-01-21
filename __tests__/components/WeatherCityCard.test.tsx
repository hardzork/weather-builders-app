import { render } from "@testing-library/react-native";
import { WeatherCityCard } from "../../src/components";
describe("WeatherCityCard", () => {
  beforeEach(() => {});
  it("should be have the city prop filled", () => {
    const { container } = render(<WeatherCityCard city={"New York"} />);
    expect(container.props.city).toBe("New York");
  });
});
