import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: { placeholder: "Type here..." }
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  )
};

export const Invalid: Story = {
  render: () => <Input invalid placeholder="Invalid state" className="w-80" />
};
