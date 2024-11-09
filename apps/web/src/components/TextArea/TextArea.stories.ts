import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/Form/TextArea",
  component: TextArea,
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
