import type { Task } from '../types';
import TaskItem from './TaskItem';

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

function TaskList({ tasks, onToggle, onDelete, onEdit }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks here. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}    
          task={task}      
          onToggle={onToggle}
          onDelete={onDelete} 
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;