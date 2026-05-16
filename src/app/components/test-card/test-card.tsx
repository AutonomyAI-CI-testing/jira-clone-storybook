import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";
import cx from "classix";

// Primary button styles used for action buttons throughout the card
const primaryButtonClasses = cx(
  "flex-1 rounded px-6 py-2",
  "bg-[#c77033] text-white",
  "font-primary-bold",
  "hover:bg-[#d17d42] active:bg-[#b8651e]"
);

// Shared input field styles for consistent form appearance
const inputFieldClasses = cx(
  "w-full rounded border-2 px-3 py-2 text-sm",
  "bg-[var(--DarkNeutral300)] border-[var(--DarkNeutral400)]",
  "text-[var(--DarkNeutral800)] placeholder:text-[var(--DarkNeutral600)]",
  "focus:outline-none focus:border-[var(--DarkNeutral500)]"
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "w-full max-w-[480px] rounded-md p-6",
        "bg-[var(--DarkNeutral100)] text-[var(--DarkNeutral900)]"
      )}
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[var(--DarkNeutral900)]">
          UI magician Agent
        </h1>
        <FiSettings className="h-6 w-6 text-[var(--DarkNeutral600)]" />
      </div>

      {/* Collapsible preview section - muted to indicate collapsed state */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp className="h-4 w-4 text-[var(--DarkNeutral600)]" />
        <p className="text-sm text-[var(--DarkNeutral600)]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section - active/expanded state indicated by darker text */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp className="h-4 w-4 text-[var(--DarkNeutral900)]" />
        <h2 className="font-primary-bold text-[var(--DarkNeutral900)]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <label
            htmlFor="personal-access-token"
            className="text-sm text-[var(--DarkNeutral700)]"
          >
            Personal Access Token
          </label>
          <FiInfo className="h-4 w-4 text-[var(--DarkNeutral600)]" />
        </div>
        <input
          type="text"
          id="personal-access-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className={inputFieldClasses}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label
            htmlFor="design-url"
            className="text-sm text-[var(--DarkNeutral700)]"
          >
            Design URL
          </label>
          <FiInfo className="h-4 w-4 text-[var(--DarkNeutral600)]" />
        </div>
        <input
          type="text"
          id="design-url"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className={inputFieldClasses}
        />
      </div>

      {/* Action buttons */}
      <div className="mb-12 flex gap-3">
        <button className={primaryButtonClasses}>Awesome</button>
        <button className={primaryButtonClasses}>Prepare</button>
      </div>

      {/* Recent Breakdowns section */}
      <h2 className="font-primary-bold text-[var(--DarkNeutral900)]">
        Recent Breakdowns
      </h2>

      {/* Footer */}
      <div className="mt-6 border-t border-[var(--DarkNeutral400)] pt-3 text-center">
        <p className="text-sm text-[var(--DarkNeutral700)]">© AutonomyAI</p>
      </div>
    </div>
  );
};
