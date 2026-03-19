import { useState, useEffect } from 'react';
import { Task, FilterType } from './types';
import TaskForm from './components/TaskForm.tsx';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

useEffect(() =>{
  const saved = localStorage.getItem('tasks');
  if(saved) {
    setTasks(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

const handleAddTask = (title: string) => {
  const newTask: Task ={
    id: crypto.randomUUID(),
    title: title,
    completed: false,
    createdAt: Date.now(),
  };
  setTasks([...tasks, newTask]);
};

const handleToggle = (id: string) => {
  setTasks(
    tasks.map(task=>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

const handleDelete = (id: string) => {
  setTasks(tasks.filter(task => task.id !== id));
};

const handleEdit = (id: string, newTite: string) =>{
  setTasks(
    tasks.map(task =>
      task.id === id ? { ...task, title: newTite } : task
    )
    );
};

const filteredTasks = tasks.filter(task => {
  if(filter === 'completed') return task.completed;
  if(filter === 'incomplete') return !task.completed;
  return true;
});

return (
    <div className="app">
      <header className="app-header">
        <h1>Task Tracker</h1>
        <span className="task-count">
          {tasks.filter(t => !t.completed).length} remaining
        </span>
      </header>

      <main className="app-main">
        <TaskForm onAdd={handleAddTask} />
        <FilterBar filter={filter} onFilterChange={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </main>
    </div>
  );
}

export default App;