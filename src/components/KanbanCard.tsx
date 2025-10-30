import React from "react";
import { useDraggable } from "@dnd-kit/core";

import { KanbanTask } from "./../types/kanban.types";


interface Props {
  id: string;
  title: string;
  onUpdate: (taskId: string, updates: Partial<KanbanTask>) => void;
  onDelete: (taskId: string) => void;
}

const KanbanCard: React.FC<Props> = ({ id, title, onUpdate, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition flex justify-between items-center"
    >
      <span className="text-gray-700 text-sm font-medium">{title}</span>

      <div className="flex gap-2 text-gray-400 text-sm">
        <button
          onClick={() => onUpdate(id, { title: prompt("Edit task title:", title) || title })}
          className="hover:text-blue-500"
          title="Edit Task"
        >
          ✎
        </button>
        <button
          onClick={() => onDelete(id)}
          className="hover:text-red-500"
          title="Delete Task"
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default KanbanCard;