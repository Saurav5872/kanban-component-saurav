import React from "react";
import KanbanColumn from "./KanbanColumn";
import { KanbanColumn as KanbanColumnType, KanbanTask } from "../../types/kanban.types";

interface KanbanBoardProps {
  columns: KanbanColumnType[];
  tasks: Record<string, KanbanTask>;
  onTaskMove: (taskId: string, fromColumn: string, toColumn: string, newIndex: number) => void;
  onTaskCreate: (columnId: string, task: KanbanTask) => void;
  onTaskUpdate: (taskId: string, updates: Partial<KanbanTask>) => void;
  onTaskDelete: (taskId: string) => void;
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  columns,
  tasks,
  onTaskMove,
  onTaskCreate,
  onTaskUpdate,
  onTaskDelete,
}) => {
  return (
    <div className="flex gap-6 p-6 overflow-x-auto">
      {columns.map((col) => (
        <KanbanColumn
          key={col.id}
          id={col.id}
          title={col.title}
          tasks={col.taskIds.map((id) => tasks[id])}
          onTaskMove={onTaskMove}
          onTaskCreate={onTaskCreate}
          onTaskUpdate={onTaskUpdate}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
