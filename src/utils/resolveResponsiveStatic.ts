import { BreakPointTwKey } from "@/system/maps/breakpoints";

export type ResponsiveValue<
  V extends string,
  K extends string = BreakPointTwKey,
> = V | Partial<Record<K, V>>;

export type ResponsiveMap<T extends string> = Record<
  BreakPointTwKey,
  Record<T, string>
>;

// get mappings object and the key to find
export function resolveFromMap<T extends string>(
  mappings: ResponsiveMap<T>,
  values: ResponsiveValue<T>,
): string {
  const responsiveValues =
    typeof values === "string" ? { base: values } : values;

  return (Object.keys(responsiveValues) as BreakPointTwKey[])
    .map((breakpoint) => {
      const value = responsiveValues[breakpoint];
      return value === undefined ? "" : mappings[breakpoint][value];
    })

    .filter(Boolean)
    .join(" ");
}
