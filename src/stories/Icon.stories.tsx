import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../components/Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  args: { name: "search", size: "md", fill: 0 }
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="favorite" size="sm" />
      <Icon name="favorite" size="md" />
      <Icon name="favorite" size="lg" />
    </div>
  )
};

export const WithColorUtilities: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="check" className="text-green-600" />
      <Icon name="error" className="text-red-600" />
      <Icon name="info" className="text-sky-600" />
    </div>
  )
};


