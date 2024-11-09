// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// Meta configuration for the Button component
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary Buttons
 */
export const PrimarySolid: Story = {
  args: {
    color: "primary",
    variant: "solid",
  },
};

export const PrimaryOutline: Story = {
  args: {
    color: "primary",
    variant: "outline",
  },
};

export const PrimaryText: Story = {
  args: {
    color: "primary",
    variant: "text",
  },
};

export const PrimarySolidDisabled: Story = {
  args: {
    color: "primary",
    variant: "solid",
    disabled: true,
  },
};

export const PrimaryOutlineDisabled: Story = {
  args: {
    color: "primary",
    variant: "outline",
    disabled: true,
  },
};

export const PrimaryTextDisabled: Story = {
  args: {
    color: "primary",
    variant: "text",
    disabled: true,
  },
};

/**
 * Secondary Buttons
 */
export const SecondarySolid: Story = {
  args: {
    color: "secondary",
    variant: "solid",
  },
};

export const SecondaryOutline: Story = {
  args: {
    color: "secondary",
    variant: "outline",
  },
};

export const SecondaryText: Story = {
  args: {
    color: "secondary",
    variant: "text",
  },
};

export const SecondarySolidDisabled: Story = {
  args: {
    color: "secondary",
    variant: "solid",
    disabled: true,
  },
};

export const SecondaryOutlineDisabled: Story = {
  args: {
    color: "secondary",
    variant: "outline",
    disabled: true,
  },
};

export const SecondaryTextDisabled: Story = {
  args: {
    color: "secondary",
    variant: "text",
    disabled: true,
  },
};

/**
 * Black Buttons
 */
export const BlackSolid: Story = {
  args: {
    color: "black",
    variant: "solid",
  },
};

export const BlackOutline: Story = {
  args: {
    color: "black",
    variant: "outline",
  },
};

export const BlackText: Story = {
  args: {
    color: "black",
    variant: "text",
  },
};

export const BlackSolidDisabled: Story = {
  args: {
    color: "black",
    variant: "solid",
    disabled: true,
  },
};

export const BlackOutlineDisabled: Story = {
  args: {
    color: "black",
    variant: "outline",
    disabled: true,
  },
};

export const BlackTextDisabled: Story = {
  args: {
    color: "black",
    variant: "text",
    disabled: true,
  },
};

/**
 * White Buttons
 */
export const WhiteSolid: Story = {
  args: {
    color: "white",
    variant: "solid",
  },
};

export const WhiteOutline: Story = {
  args: {
    color: "white",
    variant: "outline",
  },
};

export const WhiteText: Story = {
  args: {
    color: "white",
    variant: "text",
  },
};

export const WhiteSolidDisabled: Story = {
  args: {
    color: "white",
    variant: "solid",
    disabled: true,
  },
};

export const WhiteOutlineDisabled: Story = {
  args: {
    color: "white",
    variant: "outline",
    disabled: true,
  },
};

export const WhiteTextDisabled: Story = {
  args: {
    color: "white",
    variant: "text",
    disabled: true,
  },
};
