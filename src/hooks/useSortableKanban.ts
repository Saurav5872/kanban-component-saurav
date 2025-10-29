import { useState } from "react";
import { useSensor, useSensors, PointerSensor } from "@dnd-kit/core";

export interface Task {
  id: string;
  title: string;
  priority?: "low" | "medium" | "high" | "urgent";
  tags?: string[];
  dueDate?: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "1",
        title: "Implement drag and drop",
        priority: "high",
        tags: ["frontend", "feature"],
        dueDate: "Jan 20",
      },
      {
        id: "2",
        title: "Design task modal",
        priority: "medium",
        tags: ["design", "ui"],
        dueDate: "Jan 18",
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "3",
        title: "Setup TypeScript",
        priority: "urgent",
        tags: ["setup", "typescript"],
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    tasks: [],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "4",
        title: "Create project structure",
        priority: "low",
        tags: ["setup"],
        dueDate: "Jan 9",
      },
      {
        id: "5",
        title: "Install dependencies",
        priority: "low",
        tags: ["setup"],
      },
    ],
  },
];

export const useSortableKanban = () => {
  const [columns, setColumns] = useState(initialColumns);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const fromColumnIndex = columns.findIndex((col) =>
      col.tasks.some((t) => t.id === active.id)
    );
    const toColumnIndex = columns.findIndex(
      (col) => col.id === over.id || col.tasks.some((t) => t.id === over.id)
    );

    if (fromColumnIndex === -1 || toColumnIndex === -1) return;

    const fromColumn = columns[fromColumnIndex];
    const toColumn = columns[toColumnIndex];
    const task = fromColumn.tasks.find((t) => t.id === active.id);
    if (!task) return;

    const updatedFrom = {
      ...fromColumn,
      tasks: fromColumn.tasks.filter((t) => t.id !== active.id),
    };
    const updatedTo = {
      ...toColumn,
      tasks: [...toColumn.tasks, task],
    };

    const newColumns = [...columns];
    newColumns[fromColumnIndex] = updatedFrom;
    newColumns[toColumnIndex] = updatedTo;
    setColumns(newColumns);
  };

  return { columns, sensors, handleDragEnd };
};
