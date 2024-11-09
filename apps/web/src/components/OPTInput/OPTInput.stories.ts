import type { Meta, StoryObj } from "@storybook/react";
import { OPTInput } from "./OPTInput";

const meta: Meta<typeof OPTInput> = {
  title: "Components/Form/OPTInput",
  component: OPTInput,
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
