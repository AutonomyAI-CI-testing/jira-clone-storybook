type Props = { count: number };

export const IssueCount = ({ count }: Props) => (
  <span className="text-xs text-font-subtle">{count} issues</span>
);
