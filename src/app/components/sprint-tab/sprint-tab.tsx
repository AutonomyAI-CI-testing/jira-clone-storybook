type Props = { label: string; active: boolean; onSelect: () => void };

export const SprintTab = ({ label, active, onSelect }: Props) => (
  <span
    role="tab"
    aria-selected={active}
    onClick={onSelect}
    className={`cursor-pointer px-2 py-1 text-sm ${active ? "font-bold text-font-brand" : "text-font-subtle"}`}
  >
    {label}
  </span>
);
