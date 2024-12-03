import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Mercedes Benz",
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Mercedes Benz",
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Mercedes Benz",
  checked: false,
  disabled: true,
};
