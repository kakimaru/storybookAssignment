import { Meta, StoryObj } from "@storybook/react";
import DSAlert from "./DSAlert";

const meta = {
  component: DSAlert,
  args: {
    children: "react",
  },
} satisfies Meta<typeof DSAlert>;

export default meta;

type Story = StoryObj<typeof DSAlert>;

const alert = {} satisfies Story;





export { alert };