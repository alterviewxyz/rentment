import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SearchInput, SearchInputProps } from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Components/SearchInput",
  component: SearchInput,
  argTypes: {
    clearable: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
    errorText: {
      control: "text",
    },
  },
};

export default meta;

const Template: StoryFn<typeof SearchInput> = (args: SearchInputProps) => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "جستجو",
  placeholder: "جستجو",
  helperText: "متن راهنما",
  clearable: false,
};

export const Clearable = Template.bind({});
Clearable.args = {
  label: "جستجو",
  placeholder: "جستجو",
  helperText: "قابل حذف",
  clearable: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "جستجو",
  placeholder: "جستجو",
  errorText: "متن خطا",
  clearable: true,
};
