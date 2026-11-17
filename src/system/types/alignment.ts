export const VerticalAlignments = [
  "CENTER",
  "BASELINE",
  "STRETCH",
  "START",
  "END",
] as const;
export type VerticalAlignsOptions = (typeof VerticalAlignments)[number];

export const Alignments = [
  "START",
  "END",
  "CENTER",
  "EVENLY",
  "SPACE_BETWEEN",
  "AROUND",
] as const;
export type AlignmentsOptions = (typeof Alignments)[number];

export const FlexWrap = ["WRAP", "REVERSE", "NO_WRAP"] as const;
export type FlexWrapOptions = (typeof FlexWrap)[number];

export const FlexDirections = [
  "ROW",
  "COLUMN",
  "ROWREVERSE",
  "COLUMNREVERSE",
] as const;
export type FlexDirectionOptions = (typeof FlexDirections)[number];
