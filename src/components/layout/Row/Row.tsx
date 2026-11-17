import {
  alignmentResponsiveMap,
  flexDirectionResponsiveMap,
  flexWrapResponsiveMap,
  verticalAlignResponsiveMap,
} from "@/system/maps/position";
import { Alignment } from "@/system/types";
import {
  resolveFromMap,
  ResponsiveValue,
} from "@/utils/resolveResponsiveStatic";
import clsx from "clsx";
import React from "react";
import "./row.scss";

export interface Props {
  children?: React.ReactNode;

  //  Any external style to be applied on the row.
  externalStyles?: string;

  /** Horizontal alignment of children */
  alignment?: ResponsiveValue<Alignment.AlignmentsOptions>;

  /** Vertical alignment of children */
  verticalAlignment?: ResponsiveValue<Alignment.VerticalAlignsOptions>;

  // Set the flex direction of row component.
  rowFlex?: ResponsiveValue<Alignment.FlexWrapOptions>;

  // Set the flex direction of row component.
  rowFlexDirection?: ResponsiveValue<Alignment.FlexDirectionOptions>;
}

export type RowProps = Props;

const Row = (props: RowProps): React.ReactElement => {
  const {
    children,
    externalStyles,
    verticalAlignment,
    alignment,
    rowFlex,
    rowFlexDirection,
  } = props;

  return (
    <div
      className={clsx(
        "bp-row",
        alignment && resolveFromMap(alignmentResponsiveMap, alignment),
        verticalAlignment &&
          resolveFromMap(verticalAlignResponsiveMap, verticalAlignment),
        rowFlex && resolveFromMap(flexWrapResponsiveMap, rowFlex),
        rowFlexDirection &&
          resolveFromMap(flexDirectionResponsiveMap, rowFlexDirection),

        externalStyles,
      )}
    >
      {children}
    </div>
  );
};

export default Row;
