import React from "react";
import { useDroppable } from "@dnd-kit/core";
import KanbanCard from "../KanbanCard";
import { KanbanTask } from "../../types/kanban.types";

interface Props {
  id: string;
  title: string;
  tasks: KanbanTask[];
  onTaskMove: (taskId: string, fromColumn: string, toColumn: string, newIndex: number) => void;
  onTaskCreate: (columnId: string, task: KanbanTask) => void;
  onTaskUpdate: (taskId: string, updates: Partial<KanbanTask>) => void;
  onTaskDelete: (taskId: string) => void;
}

const KanbanColumn: React.FC<Props> = ({
  id,
  title,
  tasks,
  onTaskMove,
  onTaskCreate,
  onTaskUpdate,
  onTaskDelete,
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="bg-white p-4 rounded-xl shadow-md w-64 min-h-[300px] flex flex-col"
    >
      <h2 className="text-lg font-semibold mb-3">{title}</h2>

      <div className="space-y-2 flex-grow">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <KanbanCard
              key={task.id}
              id={task.id}
              title={task.title}
              onUpdate={onTaskUpdate}
              onDelete={onTaskDelete}
            />
          ))
        ) : (
          <p className="text-gray-400 text-sm">No tasks</p>
        )}
      </div>

      <button
        onClick={() =>
          onTaskCreate(id, {
            id: `task-${Math.random().toString(36).substring(2, 7)}`,
            title: "New Task",
          })
        }
        className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        + Add Task
      </button>
    </div>
  );
};

export default KanbanColumn;
