import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/Form/RadioButton",
  component: RadioButton,
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
