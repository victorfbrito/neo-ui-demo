import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Autocomplete, { type AutocompleteOption } from "../components/Autocomplete";

const OPTIONS: AutocompleteOption[] = [
  { label: "Ada Lovelace", value: "ada", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Alan Turing", value: "turing" },
  { label: "Grace Hopper", value: "hopper", image: "https://images.unsplash.com/photo-1545184180-25d471fe75d8?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Edsger Dijkstra", value: "dijkstra" },
  { label: "Barbara Liskov", value: "liskov" }
];

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  args: {
    title: "Assignee",
    options: OPTIONS,
    selectedOption: null,
    placeholder: "Search people…",
    disabled: false,
    maxHeight: 180
  }
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<AutocompleteOption | string | null>(args.selectedOption);
    return (
      <div className="max-w-md">
        <Autocomplete {...args} selectedOption={value} onSelect={setValue} />
        <div className="mt-3 text-xs text-[--muted-fg]">
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}
        </div>
      </div>
    );
  }
};
