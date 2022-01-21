import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import {
  LocationContextProvider,
  WeatherContextProvider,
  FavoritesContextProvider,
} from "../../src/hooks";

const AllTheProviders: FC = ({ children }) => {
  return (
    <LocationContextProvider>
      <WeatherContextProvider>
        <FavoritesContextProvider>{children}</FavoritesContextProvider>
      </WeatherContextProvider>
    </LocationContextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";
export { customRender as render };
