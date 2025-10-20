import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../components/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Blocks: Story = {
  render: () => (
    <div className="space-y-3">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-72" />
      <Skeleton className="h-24 w-full rounded-[--radius-lg]" />
    </div>
  )
};


