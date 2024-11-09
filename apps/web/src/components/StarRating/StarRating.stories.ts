import type { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "./StarRating";

const meta: Meta<typeof StarRating> = {
  title: "Components/StarRating",
  component: StarRating,
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
