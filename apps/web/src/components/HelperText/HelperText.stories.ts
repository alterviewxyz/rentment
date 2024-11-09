import type { Meta } from "@storybook/react";
import { HelperText } from "./HelperText";

const meta: Meta<typeof HelperText> = {
  title: "Components/Form/HelperText",
  component: HelperText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
