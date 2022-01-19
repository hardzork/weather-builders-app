import { ReactNode, useEffect, useState } from "react";
import { LocationContext, LocationInfoProps } from "./LocationContext";
import * as Location from "expo-location";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Alert } from "react-native";

export type LocationContextProviderProps = {
  children: ReactNode;
};

export function LocationContextProvider({
  children,
}: LocationContextProviderProps) {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [granted, setGranted] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState<LocationInfoProps>(
    {} as LocationInfoProps
  );

  useEffect(() => {
    async function loadLocationInfo() {
      await getLocation();
    }
    loadLocationInfo();
  }, []);

  async function getLocation() {
    try {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        return;
      }
      setGranted(status === "granted");
      const { coords } = await Location.getCurrentPositionAsync({});
      const [
        {
          city,
          country,
          district,
          isoCountryCode,
          name,
          postalCode,
          region,
          street,
          streetNumber,
          subregion,
          timezone,
        },
      ] = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      setLocation({
        lat: coords.latitude,
        lon: coords.longitude,
        address: {
          city,
          country,
          district,
          isoCountryCode,
          name,
          postalCode,
          region,
          street,
          streetNumber,
          subregion,
          timezone,
        },
      });

      setDate(
        format(new Date(), "E',' dd 'de' LLL 'de' yyyy", {
          locale: ptBR,
        })
      );
      setTime(format(new Date(), "HH:mm"));
      setCompleted(true);
    } catch (error) {
      Alert.alert(
        "Oops! Aconteceu algo...",
        `Ocorreu um erro ao buscar sua localização. \r\nDescrição: ${error}`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <LocationContext.Provider
      value={{ completed, loading, location, granted, date, time, getLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
}
