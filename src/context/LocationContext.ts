import { LocationGeocodedAddress } from "expo-location/build/Location.types";
import { createContext } from "react";

export type LocationInfoProps = {
  lat: number;
  lon: number;
  address: LocationGeocodedAddress;
};

type LocationContextProps = {
  completed: boolean;
  loading: boolean;
  location: LocationInfoProps;
  granted: boolean;
  date: string;
  time: string;
  getLocation: () => Promise<void>;
  // getLocationByLatLong: (
  //   location: Omit<LocationInfoProps, "address">
  // ) => Promise<LocationInfoProps>;
};

export const LocationContext = createContext({} as LocationContextProps);
