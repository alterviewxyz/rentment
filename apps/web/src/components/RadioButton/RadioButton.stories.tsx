import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { RadioButton, RadioButtonProps } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<RadioButtonProps> = (args) => {
  const [selected, setSelected] = useState(args.selected);

  return (
    <RadioButton
      {...args}
      selected={selected}
      onChange={() => setSelected(true)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Mercedes Benz",
  selected: false,
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: "Mercedes Benz",
  selected: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Mercedes Benz",
  selected: false,
  disabled: true,
};
