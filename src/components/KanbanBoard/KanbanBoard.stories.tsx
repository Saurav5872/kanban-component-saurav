import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import KanbanBoard from "./KanbanBoard";
import { sampleColumns, sampleTasks } from "../../data/sampleData";

const meta: Meta<typeof KanbanBoard> = {
  title: "Components/KanbanBoard",
  component: KanbanBoard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-50 min-h-screen">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof KanbanBoard>;

export const Default: Story = {
  args: {
    columns: sampleColumns,
    tasks: sampleTasks,
    onTaskMove: () => {},
    onTaskCreate: () => {},
    onTaskUpdate: () => {},
    onTaskDelete: () => {},
  },
};
