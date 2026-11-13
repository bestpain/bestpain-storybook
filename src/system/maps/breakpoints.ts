export const breakpointsTW = {
  base: "",
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
} as const;

export type BreakPointTwKey = keyof typeof breakpointsTW;
// base - pd-5 , md - md:pd-10
