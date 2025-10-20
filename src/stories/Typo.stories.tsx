import type { Meta, StoryObj } from "@storybook/react";
import Typo, { type TypoVariant, type TypoWeight } from "../components/Typo";

const meta: Meta<typeof Typo> = {
  title: "Components/Typo",
  component: Typo,
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    variant: "body-md" as TypoVariant,
    bold: "normal" as TypoWeight,
    muted: false
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display-lg","display-md","display-sm",
        "headline-lg","headline-md","headline-sm",
        "title-lg","title-md","title-sm",
        "label-lg","label-md","label-sm",
        "body-lg","body-md","body-sm",
        "button"
      ]
    },
    bold: {
      control: "radio",
      options: ["normal","medium","semibold","bold"]
    },
    muted: { control: "boolean" },
    as: { control: false }
  }
};
export default meta;
type Story = StoryObj<typeof Typo>;

export const Playground: Story = {};

export const Matrix: Story = {
  render: () => {
    const variants: TypoVariant[] = [
      "display-lg","display-md","display-sm",
      "headline-lg","headline-md","headline-sm",
      "title-lg","title-md","title-sm",
      "label-lg","label-md","label-sm",
      "body-lg","body-md","body-sm",
      "button"
    ];
    const weights: TypoWeight[] = ["normal","medium","semibold","bold"];
    return (
      <div className="grid grid-cols-1 gap-4">
        {variants.map(v => (
          <div key={v} className="flex flex-col gap-1">
            <div className="neo-text-muted text-sm">{v}</div>
            <div className="flex flex-wrap gap-6">
              {weights.map(w => (
                <Typo key={w} variant={v} bold={w}>
                  The quick brown fox — {w}
                </Typo>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
};
