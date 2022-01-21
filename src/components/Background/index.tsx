import { ReactNode } from "react";

import { BackgroundGradient } from "./styles";

type BackgroundProps = {
  children: ReactNode;
};

export function Background({ children }: BackgroundProps) {
  return <BackgroundGradient>{children}</BackgroundGradient>;
}
