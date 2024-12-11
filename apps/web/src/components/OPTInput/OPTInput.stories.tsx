import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { OPTInput, OPTInputProps } from "./OPTInput";

const meta: Meta<typeof OPTInput> = {
  title: "Components/OPTInput",
  component: OPTInput,
  argTypes: {
    length: { control: "number" },
    error: { control: "boolean" },
    onComplete: { action: "completed" },
  },
};

export default meta;

const Template: StoryFn<OPTInputProps> = (args) => <OPTInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  length: 5,
  error: false,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  length: 5,
  error: true,
};
