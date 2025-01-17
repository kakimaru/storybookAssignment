import { Meta, StoryObj } from "@storybook/react";
import DSPill, { size } from "./DSPill";

const meta = {
  component: DSPill,
  args: {
    children: "react",
  },
  argTypes: {
    size: {
      control: "radio",
      options: size,
    },
    icon: {
      control: "text",
    },
  },
} satisfies Meta<typeof DSPill>;

export default meta;

type Story = StoryObj<typeof DSPill>;

const pill = {} satisfies Story;

export { pill };
