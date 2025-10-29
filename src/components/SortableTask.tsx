import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const SortableTask = ({ task }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 rounded-lg shadow cursor-grab active:cursor-grabbing border border-gray-200"
    >
      <div className="flex justify-between">
        <h3 className="font-medium">{task.title}</h3>
        {task.priority && (
          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
            {task.priority}
          </span>
        )}
      </div>
      {task.tags && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {task.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 rounded-md px-2 py-0.5"
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
