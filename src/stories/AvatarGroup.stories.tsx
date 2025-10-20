import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../components/Avatar";
import AvatarGroup from "../components/AvatarGroup";

const meta: Meta<typeof AvatarGroup> = {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  args: {
    max: 5,
    withRings: true,
    overlapPx: 8
  }
};
export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const sample = [
  { name: "Ada Lovelace", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { name: "Grace Hopper", src: "https://images.unsplash.com/photo-1545184180-25d471fe75d8?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { name: "Alan Turing"  },
  { name: "Edsger Dijkstra" },
  { name: "Barbara Liskov" },
  { name: "Donald Knuth" }
];

export const Default: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      {sample.map((p, i) => (
        <Avatar key={i} name={p.name} src={p.src} size="sm" />
      ))}
    </AvatarGroup>
  )
};

export const LimitedWithCounter: Story = {
  args: { max: 3 },
  render: (args) => (
    <AvatarGroup {...args}>
      {sample.map((p, i) => (
        <Avatar key={i} name={p.name} src={p.src} size="sm" />
      ))}
    </AvatarGroup>
  )
};

