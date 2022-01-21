import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import axios from "axios";
// import "expo";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("expo-location", () => {
  requestForegroundPermissionsAsync: () => {
    return {
      status: "granted",
    };
  };
  getCurrentPositionAsync: () => {
    return {
      lon: -48.5044,
      lat: -1.4558,
    };
  };
  reverseGeocodeAsync: () => {
    return {
      city: "",
      country: "",
      district: "",
      isoCountryCode: "",
      name: "",
      postalCode: "",
      region: "",
      street: "",
      streetNumber: "",
      subregion: "",
      timezone: "",
    };
  };
});
