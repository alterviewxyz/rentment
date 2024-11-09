import type { Meta } from "@storybook/react";
import { Price } from "./Price";

const meta: Meta<typeof Price> = {
  title: "Components/Price",
  component: Price,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
