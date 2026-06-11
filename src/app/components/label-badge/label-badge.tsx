import cx from "classix";

export const LabelBadge = ({
  text,
  color = "blue",
}: LabelBadgeProps): JSX.Element => {
  const getColorClasses = (): string => {
    switch (color) {
      case "red":
        return "bg-red-100 text-red-700";
      case "green":
        return "bg-green-100 text-green-700";
      case "blue":
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="flex flex-col">
      <div className={cx("rounded-full px-2 py-0.5 text-xs", getColorClasses())}>
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
