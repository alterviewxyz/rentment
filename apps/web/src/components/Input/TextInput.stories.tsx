import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "number", "email", "password", "tel"],
      },
    },
    errorText: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
    iconLeft: { control: false },
    iconRight: { control: false },
  },
};

export default meta;

const Template: StoryFn<typeof TextInput> = (args: TextInputProps) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "عنوان",
  type: "text",
  placeholder: "متن ورودی",
  helperText: "متن راهنما",
  required: true,
};

export const PasswordWithToggle = Template.bind({});
PasswordWithToggle.args = {
  label: "رمز عبور",
  type: "password",
  placeholder: "••••••••",
  helperText: "رمز عبور خود را وارد کنید",
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorText: "متن خطا",
};
