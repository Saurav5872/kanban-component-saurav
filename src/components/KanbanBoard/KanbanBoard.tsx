import React from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortableKanban } from "../../hooks/useSortableKanban";
import { SortableTask } from "../SortableTask";
// const { columns } = useSortableKanban();

export const KanbanBoard: React.FC = () => {
  const { columns, sensors, handleDragEnd } = useSortableKanban();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">
        Kanban Component Playground
      </h1>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {/* ✅ Make columns scroll horizontally */}
        <div className="flex flex-row gap-6 overflow-x-auto pb-6 w-full">
          {columns.map((column) => (
            <div
              key={column.id}
              className="bg-white rounded-xl p-4 shadow-sm flex flex-col min-w-[280px] max-w-[320px] flex-shrink-0"
            >
              {/* Column Header */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-semibold text-lg text-gray-700">
                  {column.title}
                </h2>
                <span className="text-sm text-gray-500">
                  {column.tasks.length}{" "}
                  {column.tasks.length === 1 ? "task" : "tasks"}
                </span>
              </div>

              {/* Task List */}
              <SortableContext
                items={column.tasks.map((t) => t.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="flex flex-col gap-3 flex-grow">
                  {column.tasks.length > 0 ? (
                    column.tasks.map((task) => (
                      <SortableTask key={task.id} task={task} />
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm italic">No tasks</p>
                  )}
                </div>
              </SortableContext>

              {/* Add Task Button */}
              <button className="mt-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium transition">
                + Add Task
              </button>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
