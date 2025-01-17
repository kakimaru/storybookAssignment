import { Meta, StoryObj } from "@storybook/react";
import DSAlert, { colors } from "./DSAlert";

const meta = {
  component: DSAlert,
  args: {
    colors: "primary",
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

const Default = {
  args: {
    colors: "primary",
    title: "Alert title",
    description: "This is a default alert."
  },
} satisfies Story;

const Warning = {
  args: {
    colors: "warning",
    title: "Alert title",
    description: "This is a warning alert."
  },
} satisfies Story;

const Danger = {
  args: {
    colors: "danger",
    title: "Alert title",
    description: "This is a danger alert."
  },
} satisfies Story;





export { Default, Warning, Danger };