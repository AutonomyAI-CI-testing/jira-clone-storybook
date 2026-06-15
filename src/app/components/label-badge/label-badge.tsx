import cx from "classix";

// Color class mappings for each badge variant
const COLOR_CLASS_MAP: Record<ColorVariant, string> = {
  red: "bg-background-danger-bold text-font-inverse",
  green: "bg-background-success-bold text-font-inverse",
  blue: "bg-background-info-bold text-font-inverse",
};

type ColorVariant = "red" | "green" | "blue";

interface LabelBadgeProps {
  text: string;
  color?: ColorVariant;
}

export const LabelBadge = ({
  text,
  color = "blue",
}: LabelBadgeProps): JSX.Element => {
  // Use color variant from map, fall back to blue if invalid
  const colorClasses = COLOR_CLASS_MAP[color] ?? COLOR_CLASS_MAP.blue;

  return (
    <span
      className={cx("w-fit rounded-full px-2 py-0.5 text-xs", colorClasses)}
    >
      {text}
    </span>
  );
};
