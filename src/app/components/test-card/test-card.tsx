import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "w-80 rounded-lg bg-elevation-surface-raised p-4",
        "border border-border-default shadow-sm",
        "hover:shadow-md hover:bg-elevation-surface-raised-hovered",
        "transition-all duration-200 ease-in-out"
      )}
    >
      {/* Header Section */}
      <div className="mb-3">
        <h3 className="font-primary-bold text-base text-font line-clamp-2">
          Implement API endpoint
        </h3>
      </div>

      {/* Description Preview */}
      <p className="mb-4 text-sm font-primary-light text-font-subtle line-clamp-3">
        Add authentication and validation logic to the new user registration
        endpoint
      </p>

      {/* Status & Metadata Footer */}
      <div className="flex items-center justify-between gap-2">
        <span className="inline-block rounded px-2 py-1 text-xs font-primary bg-background-brand-subtlest text-font-brand">
          In Progress
        </span>
        <span className="text-xs font-primary text-font-subtlest">
          Priority: High
        </span>
      </div>
    </div>
  );
};
