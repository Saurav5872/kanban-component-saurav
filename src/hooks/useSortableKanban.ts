import { useState } from "react";
import { useSensor, useSensors, PointerSensor } from "@dnd-kit/core";

export const useSortableKanban = () => {
  const [columns, setColumns] = useState([
    {
      id: "todo",
      title: "To Do",
      tasks: [
        { id: "1", title: "Setup project" },
        { id: "2", title: "Add Tailwind CSS" },
      ],
    },
    {
      id: "doing",
      title: "In Progress",
      tasks: [{ id: "3", title: "Build Kanban UI" }],
    },
    {
      id: "done",
      title: "Done",
      tasks: [{ id: "4", title: "Integrate Storybook" }],
    },
  ]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const sourceColumn = columns.find((col) =>
      col.tasks.some((t) => t.id === active.id)
    );
    const targetColumn = columns.find((col) =>
      col.tasks.some((t) => t.id === over.id)
    );

    if (!sourceColumn || !targetColumn) return;

    const sourceTasks = sourceColumn.tasks.filter((t) => t.id !== active.id);
    const movedTask = sourceColumn.tasks.find((t) => t.id === active.id)!;
    const targetTasks = [...targetColumn.tasks, movedTask];

    setColumns((prev) =>
      prev.map((col) =>
        col.id === sourceColumn.id
          ? { ...col, tasks: sourceTasks }
          : col.id === targetColumn.id
          ? { ...col, tasks: targetTasks }
          : col
      )
    );
  };

  return { columns, sensors, handleDragEnd };
};
