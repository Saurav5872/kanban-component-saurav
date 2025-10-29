import React from "react";
import { useDraggable } from "@dnd-kit/core";

interface Props {
  id: string;
  title: string;
}

const KanbanCard = ({ id, title }: Props) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="p-3 bg-blue-100 border border-blue-300 rounded-md cursor-grab hover:bg-blue-200 transition-all"
    >
      {title}
    </div>
  );
};

export default KanbanCard;
