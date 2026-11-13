export const alignOptions = ["start", "center", "end", "stretch"] as const;
export type Align = (typeof alignOptions)[number];

export const justifyOptions = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
] as const;
export type Justify = (typeof justifyOptions)[number];
