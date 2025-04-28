export default function TodoStats({ activeCount, hasCompleted, onClearCompleted }) {
    return (
      <>
        {hasCompleted && (
          <button
            onClick={onClearCompleted}
            className="mt-4 text-sm text-red-500 hover:text-red-700"
          >
            Clear completed
          </button>
        )}
        <div className="mt-6 text-sm text-gray-500 text-center">
          {activeCount} {activeCount === 1 ? 'item' : 'items'} left
        </div>
      </>
    );
  }