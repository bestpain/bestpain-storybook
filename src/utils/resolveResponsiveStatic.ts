import { BreakPointTwKey } from "@/system/maps/breakpoints";
import { Align } from "@/system/types";

// get mappings object and the key to find
export function resolveFromMap(
  Mappings: Record<BreakPointTwKey, Record<Align, string>>,
  values: Partial<Record<BreakPointTwKey, Align>>, // {md: end}
): string {
  return (Object.keys(values) as BreakPointTwKey[])
    .map((breakpoint) => {
      const value = values[breakpoint];
      return value ? Mappings[breakpoint][value] : "";
    })
    .filter(Boolean)
    .join(" ");
}
