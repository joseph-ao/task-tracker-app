import { useState } from 'react';

type TaskFormProps = {
  onAdd: (title: string) => void;
};

function TaskForm({ onAdd }: TaskFormProps) {

  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputedvalue = input.trim();
    if (!inputedvalue) return;  
    onAdd(inputedvalue);      
    setInput('');          
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-add">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;