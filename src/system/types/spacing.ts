export const Space = [
  "auto",
  "none",
  "xxxxlarge",
  "xxxlarge",
  "xxlarge",
  "xlarge",
  "large",
  "big",
  "base",
  "medium",
  "small",
] as const;

export type SpaceOptions = (typeof Space)[number];
