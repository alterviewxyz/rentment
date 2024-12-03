import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { HelperText, HelperTextProps } from "./HelperText";

const meta: Meta<typeof HelperText> = {
  title: "Components/HelperText",
  component: HelperText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["info", "error"],
      },
    },
    disabled: { control: "boolean" },
    icon: { control: { type: "text" } },
  },
};

export default meta;

const Template: StoryFn<HelperTextProps> = (args) => <HelperText {...args} />;

export const Info: StoryFn<HelperTextProps> = Template.bind({});
Info.args = {
  text: "متن راهنما",
  variant: "info",
};

export const Error: StoryFn<HelperTextProps> = Template.bind({});
Error.args = {
  text: "متن راهنما",
  variant: "error",
  icon: "❗",
};

export const Disabled: StoryFn<HelperTextProps> = Template.bind({});
Disabled.args = {
  text: "متن راهنما",
  variant: "info",
  disabled: true,
  icon: "❗",
};
