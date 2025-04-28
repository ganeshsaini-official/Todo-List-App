export default function TodoFilter({ currentFilter, setFilter }) {
    const filters = ['all', 'active', 'completed'];
    
    return (
      <div className="flex gap-4 mb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setFilter(filter)}
            className={`px-3 py-1 rounded ${
              currentFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
    );
  }