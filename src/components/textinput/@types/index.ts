import { ReactNode } from "react";

export enum Variation {
  left = "left",
  right = "right",
}

export interface TextInputProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}