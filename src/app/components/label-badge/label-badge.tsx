import cx from "classix";

export const LabelBadge = ({
  text,
  color = "blue",
}: LabelBadgeProps): JSX.Element => (
  <div className="flex flex-col">
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
    <div className="border-t border-border pt-3 text-center text-xs text-font-subtle">
      © AutonomyAI
    </div>
  </div>
);

interface LabelBadgeProps {
  text: string;
  color?: "red" | "green" | "blue";
}
