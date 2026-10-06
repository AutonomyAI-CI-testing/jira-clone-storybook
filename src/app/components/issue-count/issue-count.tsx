type Props = { count: number };

export default function IssueCount({ count }: Props) {
  return <span className="text-xs text-font-subtle">{count} issues</span>;
}
