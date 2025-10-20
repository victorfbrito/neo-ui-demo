import type { Meta, StoryObj } from "@storybook/react";
import Chip from "../components/Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  args: {
    label: "Status",
    variant: "success"
  },
  argTypes: {
    variant: { control: "radio", options: ["success", "warning", "error", "light", "dark"] }
  }
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Playground: Story = {};

export const WithIcon: Story = {
  args: { icon: "check", label: "Completed", variant: "success" }
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Chip variant="success" icon="check" label="Success" />
      <Chip variant="warning" icon="error_outline" label="Warning" />
      <Chip variant="error" icon="error" label="Error" />
      <Chip variant="light" icon="help_outline" label="Info" />
      <Chip variant="dark" icon="schedule" label="Scheduled" />
    </div>
  )
};


