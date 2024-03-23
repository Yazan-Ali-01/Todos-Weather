import { create } from 'zustand';

// Define a type for the todo items
type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

// Define a type for the filter options
type Filter = 'all' | 'active' | 'completed';

// Define the state structure and actions
type TodoStore = {
  todos: TodoItem[];
  filter: Filter;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setFilter: (filter: Filter) => void;
};

// Helper functions for local storage operations
const getTodosFromLocalStorage = (): TodoItem[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const todosJSON = localStorage.getItem('todos');
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (error) {
    console.warn('Error reading todos from local storage:', error);
    return [];
  }
};

const saveTodosToLocalStorage = (todos: TodoItem[]) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  } catch (error) {
    console.warn('Error saving todos to local storage:', error);
  }
};
const useTodoStore = create<TodoStore>((set) => ({
  todos: getTodosFromLocalStorage(),
  filter: 'all',

  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }]
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    })),

  setFilter: (filter) =>
    set(() => ({
      filter
    }))
}));

// Directly subscribe to store changes to handle local storage updates
useTodoStore.subscribe((state) => saveTodosToLocalStorage(state.todos));

export default useTodoStore;
