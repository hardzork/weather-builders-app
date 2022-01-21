import { render } from "@testing-library/react-native";
import { WeatherPressureInfoCard } from "../../src/components";
describe("WeatherPressureInfoCard", () => {
  beforeEach(() => {});
  it("should be render the component", () => {
    const { container } = render(<WeatherPressureInfoCard />);
    expect(container).toBeTruthy();
  });
});
