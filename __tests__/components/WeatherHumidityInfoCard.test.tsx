import { render } from "@testing-library/react-native";
import { WeatherHumidityInfoCard } from "../../src/components";
describe("WeatherHumidityInfoCard", () => {
  beforeEach(() => {});
  it("should be render the component", () => {
    const { container } = render(<WeatherHumidityInfoCard />);
    expect(container).toBeTruthy();
  });
});
