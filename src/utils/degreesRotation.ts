type DirectionsProps = {
  [prop: number]: string;
};

const directions: DirectionsProps = {
  1: "Norte",
  2: "Nordeste",
  3: "Leste",
  4: "Sudeste",
  5: "Sul",
  6: "Sudoeste",
  7: "Oeste",
  8: "Noroeste",
  9: "Norte",
};
const SECTION_MAX_DEGREES = 45; //22.5;
const MAX_DEGREES = 360;

export function getDirectionByMeteorologicalDegrees(degrees: number) {
  const section = Math.round((degrees % MAX_DEGREES) / SECTION_MAX_DEGREES) + 1;
  if (section < 1 || section > 9) {
    return `Invalid degrees: ${degrees}`;
  }
  return directions[section];
}
