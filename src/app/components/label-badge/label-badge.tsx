import cx from "classix";

// Maps color prop to background and text color classes from semantic theme system
const COLOR_STYLES: Record<"red" | "green" | "blue", string> = {
  red: "bg-background-danger text-font-danger",
  green: "bg-background-success text-font-success",
  blue: "bg-background-info text-font-info",
};

export const LabelBadge = ({
  text,
  color = "blue",
}: LabelBadgeProps): JSX.Element => {
  return (
    <span
      className={cx("rounded-full px-2 py-0.5 text-xs", COLOR_STYLES[color])}
    >
      {text}
    </span>
  );
};

interface LabelBadgeProps {
  /** The text content displayed in the badge */
  text: string;
  /** Color variant: red (danger), green (success), or blue (info). Defaults to blue. */
  color?: "red" | "green" | "blue";
}
