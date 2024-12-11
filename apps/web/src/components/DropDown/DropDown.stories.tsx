import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DropDown, DropDownProps } from "./DropDown";

const meta: Meta<typeof DropDown> = {
  title: "Components/DropDown",
  component: DropDown,
  argTypes: {
    options: {
      control: {
        type: "object",
      },
      defaultValue: [
        { id: 1, label: "گزینه اول" },
        { id: 2, label: "گزینه دوم" },
        { id: 3, label: "گزینه سوم" },
        { id: 4, label: "گزینه چهارم" },
      ],
    },
    placeholder: { control: "text" },
    error: { control: "boolean" },
    multi: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<DropDownProps> = (args) => {
  const [selected, setSelected] = useState<{ id: number; label: string }[]>(
    args.value || [],
  );

  return <DropDown {...args} value={selected} onChange={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, label: "گزینه اول" },
    { id: 2, label: "گزینه دوم" },
    { id: 3, label: "گزینه سوم" },
    { id: 4, label: "گزینه چهارم" },
  ],
  placeholder: "انتخاب کنید",
  value: [],
  multi: false,
  error: false,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  options: [
    { id: 1, label: "گزینه اول" },
    { id: 2, label: "گزینه دوم" },
    { id: 3, label: "گزینه سوم" },
    { id: 4, label: "گزینه چهارم" },
  ],
  placeholder: "چند مورد انتخاب کنید",
  value: [],
  multi: true,
  error: false,
};

export const WithError = Template.bind({});
WithError.args = {
  options: [
    { id: 1, label: "گزینه اول" },
    { id: 2, label: "گزینه دوم" },
    { id: 3, label: "گزینه سوم" },
  ],
  placeholder: "انتخاب کنید",
  value: [],
  multi: false,
  error: true,
};
