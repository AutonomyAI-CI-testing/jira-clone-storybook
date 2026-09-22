import { FiSettings } from "react-icons/fi";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded bg-black p-3 font-primary text-font-inverse"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-primary-bold text-font-inverse">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-icon-inverse" />
      </div>

      {/* Collapsible info row */}
      <div className="mt-2 flex items-center gap-1">
        <HiChevronUp className="h-3 w-3 text-icon-inverse" />
        <span className="text-xs text-font-inverse">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-6">
        <div className="flex items-center gap-1">
          <HiChevronUp className="h-3 w-3 text-icon-inverse" />
          <span className="text-sm font-primary-bold text-font-inverse">
            Add New Design
          </span>
        </div>

        <div className="mt-4">
          <label className="text-xs font-primary-bold text-font-inverse">
            Personal Access Token
          </label>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-1 w-full rounded border border-border-bold bg-background-input px-3 py-2 text-xs text-font-inverse placeholder-font-subtlest"
          />
        </div>

        <div className="mt-3">
          <label className="text-xs font-primary-bold text-font-inverse">
            Design URL
          </label>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="mt-1 w-full rounded border-2 border-border-bold bg-background-input px-3 py-2 text-xs text-font-inverse placeholder-font-subtlest"
          />
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            className="flex-1 rounded bg-background-brand-bold px-4 py-2 text-xs font-primary-bold text-font-inverse"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-background-brand-bold px-4 py-2 text-xs font-primary-bold text-font-inverse"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="text-sm font-primary-bold text-font-inverse">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
