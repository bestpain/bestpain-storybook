import { Meta, StoryObj } from "@storybook/react-webpack5";
import Row from "./Row";
import { alignOptions, justifyOptions } from "@/system/types";

const meta: Meta<typeof Row> = {
  title: "Layout/Row",
  component: Row,
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      control: "select",
      options: alignOptions,
    },
    justify: {
      control: "select",
      options: justifyOptions,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Row>;

export const RowBasic: Story = {
  args: {
    alignment: { md: "end", base: "center" },
    children: "Change this text from Storybook!",
    justify: "center",
  },
};
