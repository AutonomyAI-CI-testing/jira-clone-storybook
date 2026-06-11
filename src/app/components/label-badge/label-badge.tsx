import cx from "classix";

// Color mapping for badge variants
const COLOR_CLASSES: Record<LabelBadgeProps["color"], string> = {
  red: "bg-red-100 text-red-700",
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
};

export const LabelBadge = ({
  text,
  color = "blue",
}: LabelBadgeProps): JSX.Element => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="flex flex-col">
      <div className={cx("rounded-full px-2 py-0.5 text-xs", colorClasses)}>
        {text}
      </div>
      <footer className="border-t border-gray-300 pt-3 text-center">
        © AutonomyAI
      </footer>
    </div>
  );
};

interface LabelBadgeProps {
  text: string;
  color?: "red" | "green" | "blue";
}
