import { ReactNode } from "react";

export interface AuthLayoutProps {
  LeftComponent: ReactNode;
  RightComponent: ReactNode;
  status: string;
}
