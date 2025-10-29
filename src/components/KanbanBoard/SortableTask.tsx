import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Task } from "../../hooks/useSortableKanban";

export const SortableTask: React.FC<{ task: Task }> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const priorityColor =
    task.priority === "urgent"
      ? "bg-red-100 text-red-700"
      : task.priority === "high"
      ? "bg-yellow-100 text-yellow-700"
      : task.priority === "medium"
      ? "bg-blue-100 text-blue-700"
      : "bg-gray-100 text-gray-600";

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 rounded-lg shadow cursor-grab active:cursor-grabbing border border-gray-200"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{task.title}</h3>
        {task.priority && (
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColor}`}
          >
            {task.priority}
          </span>
        )}
      </div>

      {task.tags && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 rounded-md px-2 py-0.5 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {task.dueDate && (
        <p className="text-xs text-red-500 mt-2">Due: {task.dueDate}</p>
      )}
    </div>
  );
};
