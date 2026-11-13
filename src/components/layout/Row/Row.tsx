import {
  alignResponsiveMap,
  justifyResponsiveMap,
} from "@/system/maps/position";
import { Align, Justify } from "@/system/types";
import { resolveFromMap } from "@/utils/resolveResponsiveStatic";
import clsx from "clsx";
import React from "react";
import "./row.scss";
import { BreakPointTwKey } from "@/system/maps/breakpoints";

export interface Props {
  children?: React.ReactNode;
  alignment?: Partial<Record<BreakPointTwKey, Align>>;
  justify?: Justify;
}

export type RowProps = Props;

const Row = (props: RowProps): React.ReactElement => {
  const { children, alignment, justify } = props;

  return (
    <div
      className={clsx(
        "bp-row",
        alignment && resolveFromMap(alignResponsiveMap, alignment),
        // justify && resolveFromMap(justifyResponsiveMap, justify),
      )}
    >
      {children}
    </div>
  );
};

export default Row;

// "center" -> "items-center"
// "end" -> "items-end"
