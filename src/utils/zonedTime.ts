import { addSeconds, format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function getZonedDateNow(timezone: number): string {
  const dateWithoutTimeZone = new Date(new Date().toISOString());
  const dateTimeZoned = addSeconds(dateWithoutTimeZone, timezone);
  return format(dateTimeZoned, "PP", {
    locale: ptBR,
  });
}

export function getZonedTimeNow(timezone: number): string {
  const dateWithoutTimeZone = new Date(new Date().toISOString());
  const dateTimeZoned = addSeconds(dateWithoutTimeZone, timezone);
  const hours =
    parseISO(dateTimeZoned.toISOString()).getUTCHours() < 10
      ? `0${parseISO(dateTimeZoned.toISOString()).getUTCHours()}`
      : parseISO(dateTimeZoned.toISOString()).getUTCHours().toString();
  const minutes =
    parseISO(dateTimeZoned.toISOString()).getUTCMinutes() < 10
      ? `0${parseISO(dateTimeZoned.toISOString()).getUTCMinutes()}`
      : parseISO(dateTimeZoned.toISOString()).getUTCMinutes().toString();
  return `${hours}:${minutes}`;
}
