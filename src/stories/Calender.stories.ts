import Calender from "./Calender";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "MyApp/Calender",
  component: Calender,
} satisfies Meta<typeof Calender>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    color: "red"
  }
};
export const Odd: Story = {
  args: {
    color: "green"
  }
};