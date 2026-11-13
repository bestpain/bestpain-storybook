import { Meta, StoryObj } from "@storybook/react-webpack5";
import Row from "./Row";

const meta: Meta<typeof Row> = {
  title: "Layout/Row",
  component: Row,
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Row>;

export const RowBasic: Story = {
  args: {
    alignment: "center",
    children: "Change this text from Storybook!",
  },
};
