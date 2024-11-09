import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "black", "white"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline", "text"],
      },
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    onClick: () => {},
    label: "متن دکمه",
    color: "primary",
    variant: "solid",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline", "text"],
      },
    },
    disabled: { control: "boolean" },
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline", "text"],
      },
    },
    disabled: { control: "boolean" },
  },
};

export const Black: Story = {
  args: {
    color: "black",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline", "text"],
      },
    },
    disabled: { control: "boolean" },
  },
};

export const White: Story = {
  args: {
    color: "white",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline", "text"],
      },
    },
    disabled: { control: "boolean" },
  },
};
