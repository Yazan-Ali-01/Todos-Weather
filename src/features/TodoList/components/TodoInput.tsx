import React, { useState } from 'react';
import { useTodoStore } from '@features/TodoList';

const TodoInputCompnent = () => {
  const [inputValue, setInputValue] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) {
      return;
    }
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="mx-0 mb-6">
      <div className="mt-4 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          className="text-grey-darker mr-4 w-3/4 appearance-none rounded border px-3 py-2 shadow"
        />
        <button
          type="submit"
          className="flex-no-shrink text-teal w-1/4 rounded border-2 border-slate-900/40 p-2  hover:bg-blue-500 hover:text-white"
        >
          Add
        </button>
      </div>
    </form>
  );
};

const TodoInput = React.memo(TodoInputCompnent);

TodoInput.displayName = 'TodoInput';

export default TodoInput;
