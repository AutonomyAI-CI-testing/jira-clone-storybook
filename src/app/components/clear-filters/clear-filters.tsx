import { Button } from "../button";

type Props = {
  onClear: () => void;
  disabled?: boolean;
};

export const ClearFilters = ({ onClear, disabled }: Props) => (
  <Button
    type="button"
    variant="text"
    color="neutral"
    size="sm"
    onClick={onClear}
    disabled={disabled}
  >
    Clear filters
  </Button>
);
