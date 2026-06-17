import cx from "classix";

export const LabelBadge = ({
  text,
  color = "blue",
}: LabelBadgeProps): JSX.Element => (
  <span
    className={cx(
      "rounded-full px-2 py-1 text-xs",
      color === "red" && "bg-background-danger text-font-danger",
      color === "green" && "bg-background-success text-font-success",
      color === "blue" && "bg-background-info text-font-info"
    )}
  >
    {text}
  </span>
);

interface LabelBadgeProps {
  text: string;
  color?: "red" | "green" | "blue";
}
