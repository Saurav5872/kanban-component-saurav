import React from "react";
import { useDroppable } from "@dnd-kit/core";
import KanbanCard from "./KanbanCard";

interface Props {
  id: string;
  title: string;
  tasks: { id: string; title: string }[];
}

const KanbanColumn = ({ id, title, tasks }: Props) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="bg-white p-4 rounded-xl shadow-md w-64 min-h-[300px]">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <KanbanCard key={task.id} id={task.id} title={task.title} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
