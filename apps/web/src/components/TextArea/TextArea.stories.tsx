import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    maxLength: {
      control: "number",
    },
    onChange: { action: "changed" },
    value: {
      control: false, // Disabled because we handle it dynamically in the controlled example
    },
  },
  args: {
    placeholder: "نگهدارنده پیش فرض",
    maxLength: 20,
    value: "",
  },
};

export default meta;

const Template: StoryFn<typeof TextArea> = (args) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <TextArea
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange?.(e);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "نگهدارنده پیش فرض",
  maxLength: 20,
};
