import { useState, useEffect } from 'react';
import type { Task, FilterType } from './types';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

 function handleAddTask(title: string) {
  const newTask: Task = {
    id: crypto.randomUUID(),
    title: title,
    completed: false,
    createdAt: Date.now(),
  };
  setTasks([...tasks, newTask]);
}

function handleToggle(id: string) {
  const updated = tasks.map(function(task) {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updated);
}

function handleDelete(id: string) {
  const remaining = tasks.filter(function(task) {
    return task.id !== id;
  });
  setTasks(remaining);
}

function handleEdit(id: string, newTitle: string) {
  const updated = tasks.map(function(task) {
    if (task.id === id) {
      return { ...task, title: newTitle };
    }
    return task;
  });
  setTasks(updated);
}

useEffect(function() {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    setTasks(JSON.parse(saved));
  }
}, []);

useEffect(function() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
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