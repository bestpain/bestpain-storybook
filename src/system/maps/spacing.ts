import { SpaceOptions } from "../types/spacing";

const spaceValues: Record<SpaceOptions, string> = {
  auto: "var(--brand-base-space-auto)",
  none: "var(--brand-base-space-none)",
  xxxxlarge: "var(--brand-base-space-xxxxlarge)",
  xxxlarge: "var(--brand-base-space-xxxlarge)",
  xxlarge: "var(--brand-base-space-xxlarge)",
  xlarge: "var(--brand-base-space-xlarge)",
  large: "var(--brand-base-space-large)",
  big: "var(--brand-base-space-big)",
  base: "var(--brand-base-space)",
  medium: "var(--brand-base-space-medium)",
  small: "var(--brand-base-space-small)",
};

type SpacingUtility =
  | "m"
  | "mt"
  | "mr"
  | "mb"
  | "ml"
  | "mx"
  | "my"
  | "p"
  | "pt"
  | "pr"
  | "pb"
  | "pl"
  | "px"
  | "py";

export function createSpacingMap(
  utility: SpacingUtility,
): Record<SpaceOptions, string> {
  return Object.fromEntries(
    Object.entries(spaceValues).map(([token, variable]) => [
      token,
      `${utility}-[${variable}]`,
    ]),
  ) as Record<SpaceOptions, string>;
}

// export const marginMap = createSpacingMap("m");
// export const marginTopMap = createSpacingMap("mt");
// export const marginBottomMap = createSpacingMap("mb");
// export const marginXMap = createSpacingMap("mx");

// export const paddingMap = createSpacingMap("p");
// export const paddingTopMap = createSpacingMap("pt");
// export const paddingBottomMap = createSpacingMap("pb");
// export const paddingXMap = createSpacingMap("px");
