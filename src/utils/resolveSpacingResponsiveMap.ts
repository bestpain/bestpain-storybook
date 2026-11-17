import { createSpacingMap } from "@/system/maps/spacing";
import { ResponsiveMap } from "./resolveResponsiveStatic";

export function createResponsiveMap<T extends string>(
  map: Record<T, string>,
): ResponsiveMap<T> {
  return {
    base: map,

    sm: Object.fromEntries(
      Object.entries(map).map(([key, value]) => [key, `sm:${value}`]),
    ) as Record<T, string>,

    md: Object.fromEntries(
      Object.entries(map).map(([key, value]) => [key, `md:${value}`]),
    ) as Record<T, string>,

    lg: Object.fromEntries(
      Object.entries(map).map(([key, value]) => [key, `lg:${value}`]),
    ) as Record<T, string>,

    xl: Object.fromEntries(
      Object.entries(map).map(([key, value]) => [key, `xl:${value}`]),
    ) as Record<T, string>,
  };
}

export const marginResponsiveMap = createResponsiveMap(createSpacingMap("m"));

export const marginTopResponsiveMap = createResponsiveMap(
  createSpacingMap("mt"),
);

export const marginBottomResponsiveMap = createResponsiveMap(
  createSpacingMap("mb"),
);

export const marginXResponsiveMap = createResponsiveMap(createSpacingMap("mx"));

export const marginYResponsiveMap = createResponsiveMap(createSpacingMap("my"));

export const paddingResponsiveMap = createResponsiveMap(createSpacingMap("p"));

export const paddingXResponsiveMap = createResponsiveMap(
  createSpacingMap("px"),
);

export const paddingYResponsiveMap = createResponsiveMap(
  createSpacingMap("py"),
);
