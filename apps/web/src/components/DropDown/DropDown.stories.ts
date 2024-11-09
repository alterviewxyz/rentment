import type { Meta } from "@storybook/react";
import { DropDown } from "./DropDown";

const meta: Meta<typeof DropDown> = {
  title: "Components/Form/DropDown",
  component: DropDown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
