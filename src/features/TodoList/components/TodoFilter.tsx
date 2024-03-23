/* eslint-disable prettier/prettier */
import React from 'react';
import useTodoStore from '../useTodoStore';

const TodoFilterComponent = () => {
  console.log('rerender todofilter');

  const setFilter = useTodoStore((state) => state.setFilter);
  const currentFilter = useTodoStore((state) => state.filter);

  return (
    <div className="mx-4 my-2 flex justify-between gap-4">
      {(['all', 'active', 'completed'] as const).map((filter) => (
        <button
          key={filter}
          className={`mx-2 flex-grow rounded py-2 text-center ${currentFilter === filter
            ? 'bg-gradient-to-r from-blue-400 to-emerald-400 text-white'
            : 'bg-transparent text-blue-600 hover:bg-blue-400 hover:text-white'
            }`}
          onClick={() => setFilter(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

const TodoFilter = React.memo(TodoFilterComponent);

TodoFilter.displayName = 'TodoFilter';

export default TodoFilter;
