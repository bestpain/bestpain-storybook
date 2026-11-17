export const verticalAlignResponsiveMap = {
  base: {
    START: "items-start",
    CENTER: "items-center",
    END: "items-end",
    STRETCH: "items-stretch",
    BASELINE: "items-baseline",
  },
  sm: {
    START: "sm:items-start",
    CENTER: "sm:items-center",
    END: "sm:items-end",
    STRETCH: "sm:items-stretch",
    BASELINE: "sm:items-baseline",
  },
  md: {
    START: "md:items-start",
    CENTER: "md:items-center",
    END: "md:items-end",
    STRETCH: "md:items-stretch",
    BASELINE: "md:items-baseline",
  },
  lg: {
    START: "lg:items-start",
    CENTER: "lg:items-center",
    END: "lg:items-end",
    STRETCH: "lg:items-stretch",
    BASELINE: "lg:items-baseline",
  },
  xl: {
    START: "xl:items-start",
    CENTER: "xl:items-center",
    END: "xl:items-end",
    STRETCH: "xl:items-stretch",
    BASELINE: "xl:items-baseline",
  },
} as const;

export const alignmentResponsiveMap = {
  base: {
    START: "justify-start",
    CENTER: "justify-center",
    END: "justify-end",
    SPACE_BETWEEN: "justify-between",
    AROUND: "justify-around",
    EVENLY: "justify-evenly",
  },
  sm: {
    START: "sm:justify-start",
    CENTER: "sm:justify-center",
    END: "sm:justify-end",
    SPACE_BETWEEN: "sm:justify-between",
    AROUND: "sm:justify-around",
    EVENLY: "sm:justify-evenly",
  },
  md: {
    START: "md:justify-start",
    CENTER: "md:justify-center",
    END: "md:justify-end",
    SPACE_BETWEEN: "md:justify-between",
    AROUND: "md:justify-around",
    EVENLY: "md:justify-evenly",
  },
  lg: {
    START: "lg:justify-start",
    CENTER: "lg:justify-center",
    END: "lg:justify-end",
    SPACE_BETWEEN: "lg:justify-between",
    AROUND: "lg:justify-around",
    EVENLY: "lg:justify-evenly",
  },
  xl: {
    START: "xl:justify-start",
    CENTER: "xl:justify-center",
    END: "xl:justify-end",
    SPACE_BETWEEN: "xl:justify-between",
    AROUND: "xl:justify-around",
    EVENLY: "xl:justify-evenly",
  },
} as const;

export const flexWrapResponsiveMap = {
  base: {
    WRAP: "flex-wrap",
    REVERSE: "flex-wrap-reverse",
    NO_WRAP: "flex-nowrap",
  },
  sm: {
    WRAP: "sm:flex-wrap",
    REVERSE: "sm:flex-wrap-reverse",
    NO_WRAP: "sm:flex-nowrap",
  },
  md: {
    WRAP: "md:flex-wrap",
    REVERSE: "md:flex-wrap-reverse",
    NO_WRAP: "md:flex-nowrap",
  },
  lg: {
    WRAP: "lg:flex-wrap",
    REVERSE: "lg:flex-wrap-reverse",
    NO_WRAP: "lg:flex-nowrap",
  },
  xl: {
    WRAP: "xl:flex-wrap",
    REVERSE: "xl:flex-wrap-reverse",
    NO_WRAP: "xl:flex-nowrap",
  },
} as const;

export const flexDirectionResponsiveMap = {
  base: {
    ROW: "flex-row",
    COLUMN: "flex-col",
    ROWREVERSE: "flex-row-reverse",
    COLUMNREVERSE: "flex-col-reverse",
  },
  sm: {
    ROW: "sm:flex-row",
    COLUMN: "sm:flex-col",
    ROWREVERSE: "sm:flex-row-reverse",
    COLUMNREVERSE: "sm:flex-col-reverse",
  },
  md: {
    ROW: "md:flex-row",
    COLUMN: "md:flex-col",
    ROWREVERSE: "md:flex-row-reverse",
    COLUMNREVERSE: "md:flex-col-reverse",
  },
  lg: {
    ROW: "lg:flex-row",
    COLUMN: "lg:flex-col",
    ROWREVERSE: "lg:flex-row-reverse",
    COLUMNREVERSE: "lg:flex-col-reverse",
  },
  xl: {
    ROW: "xl:flex-row",
    COLUMN: "xl:flex-col",
    ROWREVERSE: "xl:flex-row-reverse",
    COLUMNREVERSE: "xl:flex-col-reverse",
  },
  "2xl": {
    ROW: "2xl:flex-row",
    COLUMN: "2xl:flex-col",
    ROWREVERSE: "2xl:flex-row-reverse",
    COLUMNREVERSE: "2xl:flex-col-reverse",
  },
} as const;
