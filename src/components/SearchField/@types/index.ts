import { ReactNode } from "react";

export enum Variation {
  left = "left",
  right = "right",
}

export interface SearchFieldProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  externalSearchInput?: boolean;
  getReturnValue?: (value: string) => void;
}
