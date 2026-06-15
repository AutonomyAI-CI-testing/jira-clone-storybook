
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * Reusable action button for the TestCard UI.
 * Uses background-danger-bold to match the burnt orange/brown design requirement.
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-background-danger-bold text-font-inverse rounded-lg py-3 px-6 font-semibold flex-1 transition-opacity hover:opacity-90 active:scale-[0.98]">
    {children}
  </button>
);

/**
 * TestCard replicates a Figma UI panel design for a "UI magician Agent".
 * This is a self-contained smoke test component to verify new UI rendering patterns.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-elevation-surface-sunken p-5 w-[320px] rounded text-font shadow-xl"
    >
      {/* Header: Title and Settings gear */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-font">UI magician Agent</h1>
        <IoSettingsOutline className="text-icon-subtle" size={20} title="Settings" />
      </header>

      {/* Subtitle: Muted orange text with chevron */}
      <div className="flex items-center gap-1 text-[#c97a50] text-sm mb-6">
        <FiChevronUp aria-hidden="true" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section: Collapsible-style header for Add New Design */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp className="text-font" aria-hidden="true" />
          <h2 className="font-bold text-font">Add New Design</h2>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="pat-input" className="text-sm">
                Personal Access Token
              </label>
              <AiOutlineInfoCircle size={16} className="text-icon-subtle" />
            </div>
            <input
              id="pat-input"
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="bg-elevation-surface-overlay border border-border-input rounded px-3 py-2 text-font-subtle w-full outline-none focus:border-border-accent transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="design-url-input" className="text-sm">
                Design URL
              </label>
              <AiOutlineInfoCircle size={16} className="text-icon-subtle" />
            </div>
            <input
              id="design-url-input"
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="bg-elevation-surface-overlay border border-border-input rounded px-3 py-2 text-font-subtle w-full outline-none focus:border-border-accent transition-colors"
            />
          </div>
        </div>

        {/* Action Row */}
        <div className="flex gap-3 mt-4">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>
      </section>

      {/* Footer-style section for recent items */}
      <footer>
        <h3 className="font-bold text-font mt-6">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};
