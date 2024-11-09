import type { Meta } from "@storybook/react";
import { CardBase } from "./CardBase";

const meta: Meta<typeof CardBase> = {
  title: "Components/CardBase",
  component: CardBase,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
