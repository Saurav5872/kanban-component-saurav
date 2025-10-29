export const isOverdue = (dueDate?: Date): boolean => {
  if (!dueDate) return false;
  return new Date() > new Date(dueDate);
};
export const generateId = () => Math.random().toString(36).substring(2, 9);

export const getInitials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

export const reorderTasks = (tasks: string[], startIndex: number, endIndex: number) => {
  const result = Array.from(tasks);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const moveTaskBetweenColumns = (sourceColumn: string[], destColumn: string[], sourceIndex: number, destIndex: number) => {
  const sourceClone = Array.from(sourceColumn);
  const destClone = Array.from(destColumn);
  const [removed] = sourceClone.splice(sourceIndex, 1);
  destClone.splice(destIndex, 0, removed);
  return { source: sourceClone, destination: destClone };
};
