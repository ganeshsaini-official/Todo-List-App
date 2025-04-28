import { Check, Trash2 } from 'lucide-react';
// TodoItem.jsx me
import { motion } from 'framer-motion';

<motion.div 
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
>
  {/* Your content */}
</motion.div>
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`flex items-center p-3 border rounded-lg ${
      todo.completed ? 'bg-gray-50' : 'bg-white'
    }`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
          todo.completed ? 'bg-green-500 text-white' : 'border border-gray-300'
        }`}
      >
        {todo.completed && <Check size={16} />}
      </button>
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 p-1"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}