import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Components/HeroSection",
  component: HeroSection,
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
