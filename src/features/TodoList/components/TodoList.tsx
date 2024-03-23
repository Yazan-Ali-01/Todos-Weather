import React from 'react';
import { useTodoStore } from '@features/TodoList';
import { TodoFilter, TodoInput, TodoItem } from '@features/TodoList';
import { AnimatePresence } from 'framer-motion';

const TodoList = () => {
  const { todos, filter } = useTodoStore((state) => ({
    todos: state.todos,
    filter: state.filter
  }));

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const sortedAndFilteredTodos = [...filteredTodos].sort((a, b) => b.id - a.id);

  return (
    <div>
      <TodoFilter />
      <TodoInput />
      <div className="mt-4 max-h-72 overflow-y-auto">
        <AnimatePresence>
          {sortedAndFilteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TodoList;
