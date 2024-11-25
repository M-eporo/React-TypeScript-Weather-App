import Footer from "./Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "MyApp/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    color: "red"
  }
};
export const Black: Story = {
  args: {
    color: "black"
  }
};