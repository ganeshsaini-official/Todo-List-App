import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return; // Early return
    onAdd(input);
    setInput('');
    onAdd(input);
    setInput('');
  };

  return (
    <div className="flex gap-2 mb-6">
      {/* JSX remains exactly the same */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="Add a new task..."
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
      >
        <Plus size={20} />
      </button>
    </div>
  );
}