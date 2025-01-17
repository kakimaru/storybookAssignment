import { Meta, StoryObj } from "@storybook/react";
import DSAlert, { colors } from "./DSAlert";

const meta = {
  component: DSAlert,
  args: {
    title: "Alert title",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe."
  },
  argTypes: {
    colors: {
      control: "radio",
      options: colors
    }
  }
} satisfies Meta<typeof DSAlert>;

export default meta;

type Story = StoryObj<typeof DSAlert>;

const alert = {} satisfies Story;





export { alert };