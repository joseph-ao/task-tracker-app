import { useState } from 'react';
import type { Task } from '../types';

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleSave = () => {
    const trimmed = editValue.trim();
    if (!trimmed) return;        
    onEdit(task.id, trimmed);    
    setIsEditing(false);       
  };

  const handleCancel = () => {
    setEditValue(task.title);    
    setIsEditing(false);       
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter')  handleSave();
    if (e.key === 'Escape') handleCancel();
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>

      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <input
          type="text"
          className="task-edit-input"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span
          className="task-title"
          onDoubleClick={() => setIsEditing(true)}
        >
          {task.title}
        </span>
      )}

      <div className="task-actions">
        {isEditing ? (
          <>
            <button className="btn btn-save" onClick={handleSave}>Save</button>
            <button className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn btn-delete" onClick={() => onDelete(task.id)}>Delete</button>
          </>
        )}
      </div>

    </li>
  );
}

export default TaskItem;