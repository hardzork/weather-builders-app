import { render } from "@testing-library/react-native";
import { WeatherPrincipalCard } from "../../src/components";
describe("WeatherPrincipalCard", () => {
  beforeEach(() => {});
  it("should be render the component", () => {
    const { container } = render(<WeatherPrincipalCard />);
    expect(container).toBeTruthy();
  });
});
