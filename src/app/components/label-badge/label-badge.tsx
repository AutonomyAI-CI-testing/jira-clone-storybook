import cx from "classix";

export const LabelBadge = ({ text, color = "blue" }: Props): JSX.Element => {
  const colorClasses = (): string => {
    if (color === "red") {
      return "bg-background-danger-bold text-font-inverse";
    }

    if (color === "green") {
      return "bg-background-success-bold text-font-inverse";
    }

    if (color === "blue") {
      return "bg-background-info-bold text-font-inverse";
    }

    return "bg-background-info-bold text-font-inverse";
  };

  return (
    <span className={cx("rounded-full px-2 py-0.5 text-xs", colorClasses())}>
      {text}
    </span>
  );
};

interface Props {
  text: string;
  color?: "red" | "green" | "blue";
}
