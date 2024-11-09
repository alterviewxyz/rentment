import type { Meta, StoryObj } from "@storybook/react";
import { HelperText } from "./HelperText";

const meta: Meta<typeof HelperText> = {
  title: "Components/Form/HelperText",
  component: HelperText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Main: Story = {};
