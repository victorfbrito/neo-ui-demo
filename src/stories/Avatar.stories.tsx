import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  args: {
    name: "Ada Lovelace",
    size: "sm"
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md"] }
  }
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Fallback: Story = {};

export const WithImage: Story = {
  args: {
    size: "md",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=facearea&facepad=2"
  }
};

export const CustomColor: Story = {
  args: {
    name: "Grace Hopper",
    color: "#5ABDCC"
  }
};
