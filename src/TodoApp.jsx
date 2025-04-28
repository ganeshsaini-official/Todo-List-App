import { useState } from 'react';
import useTodos from './hooks/useTodos';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';
import TodoStats from './components/TodoStats';

export default function TodoApp() {
  const [filter, setFilter] = useState('all');
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    filterTodos,
  } = useTodos();

  const filteredTodos = filterTodos(filter);
  const activeCount = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((todo) => todo.completed);

  return (
    <div className="max-w-md mx-auto p-4 bg-gradient-to-r from-purple-200 to-pink-200 ">
      <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
      
      <TodoInput onAdd={addTodo} />
      <TodoFilter currentFilter={filter} setFilter={setFilter} />

      <div className="space-y-2">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No todos found</p>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>

      <TodoStats
        activeCount={activeCount}
        hasCompleted={hasCompleted}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
}