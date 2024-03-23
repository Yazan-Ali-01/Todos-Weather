// features/TodoList/components/TodoItem.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTodoStore } from '@features/TodoList'; // Adjust the import path as necessary

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItemCompnent: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="mb-4 flex items-center space-x-3"
    >
      <p
        className={`text-grey-darkest flex-grow text-lg ${completed ? 'line-through' : ''}`}
      >
        {text}
      </p>
      <button
        onClick={() => toggleTodo(id)}
        className={`flex-no-shrink ml-4 mr-2 rounded-md border-2 p-2 ${completed ? 'bg-green-600 text-white' : 'border-green-500 text-green-700 hover:bg-green-600 hover:text-white'}`}
      >
        Done
      </button>
      <button
        onClick={() => removeTodo(id)}
        className="flex-no-shrink ml-2 rounded-md border-2 border-rose-400 p-2 text-rose-600 hover:bg-rose-500 hover:text-white"
      >
        Remove
      </button>
    </motion.div>
  );
};

const TodoItem = React.memo(TodoItemCompnent);

TodoItem.displayName = 'TodoItem';

export default TodoItem;
