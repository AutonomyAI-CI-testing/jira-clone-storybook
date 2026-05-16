import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * TestCard component displays a form for adding new design configurations.
 * Includes collapsible sections, form inputs for authentication and design URLs,
 * and action buttons for triggering operations.
 */
export const TestCard = (): JSX.Element => {
  // Shared button styling for consistency across primary action buttons
  const buttonStyle = { backgroundColor: "var(--Orange800)" };
  const buttonClassName =
    "flex-1 rounded-md px-6 py-3.5 text-base font-medium text-font-inverse hover:opacity-90 active:opacity-80";

  return (
    <div className="max-w-[508px] rounded bg-elevation-surface-sunken px-10 py-8">
      {/* Header with settings access */}
      <header className="mb-6 flex items-center justify-between">
        <h2 className="font-primary-bold text-xl text-font">
          UI magician Agent
        </h2>
        <button
          className="text-font-subtle hover:text-font"
          aria-label="Open settings"
        >
          <FiSettings size={24} />
        </button>
      </header>

      {/* Collapsible hint section - indicates expandable content */}
      <div className="mb-16 flex items-center gap-2 text-font-subtle">
        <FiChevronUp size={18} aria-hidden="true" />
        <span className="text-base">From entire frame to a singl...</span>
      </div>

      {/* Form section for adding new design */}
      <section className="mb-8">
        <div className="mb-8 flex items-center gap-2">
          <FiChevronUp
            size={18}
            className="text-font-subtle"
            aria-hidden="true"
          />
          <h3 className="font-primary-bold text-lg text-font">
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token input with info tooltip */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="token" className="text-base text-font">
              Personal Access Token
            </label>
            <FiInfo
              size={16}
              className="text-font-subtle"
              aria-label="More information about Personal Access Token"
            />
          </div>
          <input
            id="token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-border-input bg-background-input px-4 py-3.5 text-base text-font placeholder:text-font-subtlest focus:border-border-brand focus:outline-none"
          />
        </div>

        {/* Design URL input with info tooltip */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="url" className="text-base text-font">
              Design URL
            </label>
            <FiInfo
              size={16}
              className="text-font-subtle"
              aria-label="More information about Design URL"
            />
          </div>
          <input
            id="url"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded-sm border border-border-input bg-background-input px-4 py-3.5 text-base text-font placeholder:text-font-subtlest focus:border-border-brand focus:outline-none"
          />
        </div>

        {/* Primary action buttons */}
        <div className="mb-16 flex gap-4">
          <button style={buttonStyle} className={buttonClassName}>
            Awesome
          </button>
          <button style={buttonStyle} className={buttonClassName}>
            Prepare
          </button>
        </div>
      </section>

      {/* Recent activity section */}
      <h3 className="font-primary-bold text-lg text-font">Recent Breakdowns</h3>

      {/* Footer with copyright */}
      <footer className="border-gray-300 mt-3 border-t pt-3 text-center text-font">
        © AutonomyAI
      </footer>
    </div>
  );
};
