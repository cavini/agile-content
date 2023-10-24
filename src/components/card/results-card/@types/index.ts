/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResultsCardProps<T> {
  variation: string;
  item: T;
  // this has to be any, because it has a complex usage.
  // It can either take a function that has its own params or it takes the T interface as a prop
  onClick: any;
}
