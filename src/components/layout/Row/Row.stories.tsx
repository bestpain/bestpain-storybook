import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Row from "./Row";
import { Alignment } from "@/system/types";

const meta: Meta<typeof Row> = {
  title: "Layout/Row",
  component: Row,
  tags: ["autodocs"],

  argTypes: {
    verticalAlignment: {
      control: { type: "object" },
      name: "Vertical Alignment",
      description: `Responsive vertical alignment. Breakpoints: base, sm, md, lg, xl.
        
**Accepted values:**
${Alignment.VerticalAlignments.join(", ")}`,
    },

    alignment: {
      control: { type: "object" },
      name: "Justify",
      description: `Responsive horizontal alignment. Breakpoints: base, sm, md, lg, xl.
        
**Accepted values:**
${Alignment.Alignments.join(", ")}`,
    },

    rowFlex: {
      control: { type: "object" },
      name: "Flex Wrap",
    },

    rowFlexDirection: {
      control: { type: "object" },
      name: "Flex Direction",
      description: `Responsive flex direction. Breakpoints: base, sm, md, lg, xl, 2xl.

**Accepted values:**
${Alignment.FlexDirections.join(", ")}`,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Row>;

export const RowBasic: Story = {
  args: {
    alignment: {
      base: "START",
      md: "CENTER",
    },

    verticalAlignment: {
      base: "START",
      md: "CENTER",
    },

    rowFlex: {
      base: "WRAP",
      md: "NO_WRAP",
    },

    rowFlexDirection: {
      base: "COLUMN",
      md: "ROW",
    },
  },

  render: (args) => (
    <Row {...args}>
      <p>Hello world</p>
      <p>Hello world</p>
    </Row>
  ),
};
