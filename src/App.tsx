import React from 'react';
import { KanbanBoard } from './components/KanbanBoard/KanbanBoard';
import { sampleColumns, sampleTasks } from './data/sampleData';

const App: React.FC = () => {
  // simple container; primary use is via Storybook
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      {/* <h1 className="text-2xl font-semibold mb-4">Kanban Component Playground</h1> */}
      <KanbanBoard
        columns={sampleColumns}
        tasks={sampleTasks}
        onTaskMove={() => {}}
        onTaskCreate={() => {}}
        onTaskUpdate={() => {}}
        onTaskDelete={() => {}}
      />
    </div>
  );
};

export default App;
