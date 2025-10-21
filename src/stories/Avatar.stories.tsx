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

export const WithImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=facearea&facepad=2"
  }
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar name="Ada Lovelace" size="sm" color="#5ABDCC"/>
      <Avatar name="Grace Hopper" size="md" color="#22A9CB"/>
    </div>)
};


export const CustomColor: Story = {
  args: {
    name: "Grace Hopper",
    color: "#5ABDCC"
  }
};
