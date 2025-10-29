import { useState } from "react";
import {
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
} from "@dnd-kit/core";

interface Task {
  id: string;
  title: string;
}

interface Columns {
  [key: string]: Task[];
}

const initialData: Columns = {
  todo: [
    { id: "1", title: "Setup project" },
    { id: "2", title: "Add Tailwind CSS" },
  ],
  doing: [{ id: "3", title: "Build Kanban UI" }],
  done: [{ id: "4", title: "Integrate Storybook" }],
};

export const useKanban = () => {
  const [columns, setColumns] = useState<Columns>(initialData);
  const sensors = useSensors(useSensor(PointerSensor));

  const findCard = (id: string): [string | null, Task | null] => {
    for (const columnId in columns) {
      const task = columns[columnId].find((item) => item.id === id);
      if (task) return [columnId, task];
    }
    return [null, null];
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const [sourceColumnId, sourceTask] = findCard(String(active.id));
    const [targetColumnId] = findCard(String(over.id)) || [over.id];

    if (
      sourceColumnId &&
      targetColumnId &&
      sourceColumnId !== targetColumnId &&
      sourceTask
    ) {
      setColumns((prev) => {
        const sourceItems = prev[sourceColumnId].filter(
          (task) => task.id !== active.id
        );
        const targetItems = [...prev[targetColumnId], sourceTask];
        return {
          ...prev,
          [sourceColumnId]: sourceItems,
          [targetColumnId]: targetItems,
        };
      });
    }
  };

  return { columns, handleDragEnd, sensors };
};
