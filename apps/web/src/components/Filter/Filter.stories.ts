import type { Meta } from "@storybook/react";
import { Filter } from "./Filter";

const meta: Meta<typeof Filter> = {
  title: "Components/Filter",
  component: Filter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
