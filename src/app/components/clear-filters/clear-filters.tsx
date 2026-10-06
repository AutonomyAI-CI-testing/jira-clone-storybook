type Props = {
  onClear: () => void;
  disabled?: boolean;
};

export const ClearFilters = ({ onClear, disabled }: Props) => (
  <button
    type="button"
    onClick={onClear}
    disabled={disabled}
    className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
  >
    Clear filters
  </button>
);
