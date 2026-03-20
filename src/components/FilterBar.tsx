import type { FilterType } from '../types';

type FilterBarProps = {
  filter: FilterType;
  onFilterChange: (f: FilterType) => void;
};

const FILTERS: FilterType[] = ['all', 'completed', 'incomplete'];

function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      {FILTERS.map(f => (
        <button
          key={f}
          className={`filter-btn ${filter === f ? 'active' : ''}`}
          onClick={() => onFilterChange(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;