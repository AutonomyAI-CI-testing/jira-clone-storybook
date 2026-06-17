import cx from "classix";

export const LabelBadge = ({
  text,
  color = "blue",
}: LabelBadgeProps): JSX.Element => {
  const colorClasses = (): string => {
    switch (color) {
      case "red":
        return "bg-background-danger text-font-danger";
      case "green":
        return "bg-background-success text-font-success";
      case "blue":
      default:
        return "bg-background-brand-subtlest text-font-brand";
    }
  };

  return (
    <div className={cx("rounded-full px-2 py-0.5 text-xs", colorClasses())}>
      {text}
    </div>
  );
};

export default function LabelBadgeDemo(): JSX.Element {
  return (
    <div className="flex gap-3">
      <LabelBadge text="Bug" color="red" />
      <LabelBadge text="Feature" color="green" />
      <LabelBadge text="Improvement" color="blue" />
    </div>
  );
}

interface LabelBadgeProps {
  text: string;
  color?: "red" | "green" | "blue";
}
