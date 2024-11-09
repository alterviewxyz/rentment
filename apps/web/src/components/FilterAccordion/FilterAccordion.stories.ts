import type { Meta, StoryObj } from "@storybook/react";
import { FilterAccordion } from "./FilterAccordion";

const meta: Meta<typeof FilterAccordion> = {
  title: "Components/FilterAccordion",
  component: FilterAccordion,
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
