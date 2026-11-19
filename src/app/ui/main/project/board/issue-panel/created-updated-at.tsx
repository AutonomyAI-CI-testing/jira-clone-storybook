import { Issue } from "@domain/issue/issue";
import { formatDateTime } from "@utils/formatDateTime";

export const CreatedUpdatedAt = ({ issue }: Props): JSX.Element | null => {
  // The panel is also rendered on the create route, where there is no issue yet
  // and therefore nothing to date. Claiming "Just now" for both rows would
  // describe a record that does not exist.
  if (!issue) return null;

  const values = [
    { label: "Created at:", value: issue.createdAt },
    { label: "Updated at:", value: issue.updatedAt },
  ];

  return (
    <table>
      <tbody className="text-xs text-font-subtlest">
        {values.map(({ label, value }) => (
          <tr key={label}>
            <td className="pr-4">
              <p className="mb-2">{label}</p>
            </td>
            <td>
              <p className="mb-2">{formatDateTime(value)}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface Props {
  issue?: Issue;
}
