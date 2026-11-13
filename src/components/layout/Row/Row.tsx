import { alignResponsiveMap } from "@/system/maps/position";
import { Align } from "@/system/types";
import { resolveFromMap } from "@/utils/resolveResponsiveStatic";
import clsx from "clsx";
import React from "react";
import "./row.scss";

export interface Props {
  children?: React.ReactNode;
  alignment?: Align;
}

export type RowProps = Props;

const Row = (props: RowProps): React.ReactElement => {
  const { children, alignment } = props;

  return (
    <div
      className={clsx(
        "bp-row",
        alignment && resolveFromMap(alignResponsiveMap, alignment),
      )}
    >
      {children}
    </div>
  );
};

export default Row;

// "center" -> "items-center"
// "end" -> "items-end"
