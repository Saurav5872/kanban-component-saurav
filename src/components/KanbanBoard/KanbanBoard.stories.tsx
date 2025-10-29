import type { Meta, StoryObj } from "@storybook/react";
import { KanbanBoard } from "./KanbanBoard";

const meta: Meta<typeof KanbanBoard> = {
  title: "Components/KanbanBoard",
  component: KanbanBoard,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof KanbanBoard>;

export const Default: Story = {};
